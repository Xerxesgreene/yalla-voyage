-- =========================================================
-- YALLA VOYAGE — Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- =========================================================

-- =====================
-- 1. PROFILES TABLE
-- =====================
CREATE TABLE IF NOT EXISTS public.profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name   TEXT,
  is_admin    BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =====================
-- 2. POSTS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS public.posts (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title         TEXT NOT NULL,
  slug          TEXT UNIQUE NOT NULL,
  excerpt       TEXT,
  content       JSONB NOT NULL DEFAULT '{}',
  cover_image   TEXT,
  category      TEXT,
  status        TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_id     UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  published_at  TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS posts_updated_at ON public.posts;
CREATE TRIGGER posts_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- =====================
-- 3. CONTACT QUERIES
-- =====================
CREATE TABLE IF NOT EXISTS public.contact_queries (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  phone        TEXT,
  destination  TEXT,
  travel_date  DATE,
  party_size   INTEGER,
  message      TEXT NOT NULL,
  status       TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded')),
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- 4. DESTINATIONS TABLE
-- =====================
CREATE TABLE IF NOT EXISTS public.destinations (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,
  country      TEXT NOT NULL,
  region       TEXT,
  description  TEXT,
  image_url    TEXT,
  is_featured  BOOLEAN DEFAULT FALSE,
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- =====================
-- 5. PACKAGES TABLE
-- =====================
CREATE TABLE IF NOT EXISTS public.packages (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title            TEXT NOT NULL,
  destination_id   UUID REFERENCES public.destinations(id) ON DELETE SET NULL,
  duration_days    INTEGER NOT NULL DEFAULT 1,
  price_sar        NUMERIC(10,2) NOT NULL DEFAULT 0,
  description      TEXT,
  features         TEXT[] DEFAULT '{}',
  image_url        TEXT,
  is_active        BOOLEAN DEFAULT TRUE,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================
-- ROW LEVEL SECURITY (RLS)
-- =========================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_queries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;

-- Helper function to check admin status
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM public.profiles WHERE id = auth.uid()),
    FALSE
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- -----------------------
-- POSTS policies
-- -----------------------
-- Public: read published posts
CREATE POLICY "Public can read published posts"
  ON public.posts FOR SELECT
  USING (status = 'published');

-- Admin: full access
CREATE POLICY "Admins have full access to posts"
  ON public.posts FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- -----------------------
-- CONTACT QUERIES policies
-- -----------------------
-- Anyone can insert a query
CREATE POLICY "Anyone can submit a query"
  ON public.contact_queries FOR INSERT
  WITH CHECK (TRUE);

-- Only admins can view/update queries
CREATE POLICY "Admins can view queries"
  ON public.contact_queries FOR SELECT
  USING (public.is_admin());

CREATE POLICY "Admins can update queries"
  ON public.contact_queries FOR UPDATE
  USING (public.is_admin());

-- -----------------------
-- DESTINATIONS policies
-- -----------------------
CREATE POLICY "Public can view destinations"
  ON public.destinations FOR SELECT USING (TRUE);

CREATE POLICY "Admins can manage destinations"
  ON public.destinations FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- -----------------------
-- PACKAGES policies
-- -----------------------
CREATE POLICY "Public can view active packages"
  ON public.packages FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Admins can manage packages"
  ON public.packages FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- -----------------------
-- PROFILES policies
-- -----------------------
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (id = auth.uid());

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (id = auth.uid());

CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  USING (public.is_admin());

-- =========================================================
-- SEED DESTINATIONS
-- =========================================================
INSERT INTO public.destinations (name, country, region, description, image_url, is_featured) VALUES
  ('AlUla', 'Saudi Arabia', 'GCC', 'Discover the ancient wonder of AlUla — a living museum with the iconic Hegra UNESCO World Heritage Site.', 'https://images.unsplash.com/photo-1604608672516-5b0a91d21cf5?w=800&q=80', TRUE),
  ('Dubai', 'UAE', 'GCC', 'Experience the extraordinary blend of ultramodern architecture and rich heritage.', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', TRUE),
  ('Muscat', 'Oman', 'GCC', 'Explore stunning coastline, majestic mountains, and the timeless charm of Muscat.', 'https://images.unsplash.com/photo-1591992812194-c8c7f7a2a4a1?w=800&q=80', TRUE),
  ('Riyadh', 'Saudi Arabia', 'GCC', 'Saudi Arabia''s vibrant capital blends skyscrapers and sand dunes.', 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80', FALSE),
  ('Maldives', 'Maldives', 'International', 'Pristine turquoise waters, overwater bungalows, and breathtaking coral reefs.', 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', TRUE),
  ('Istanbul', 'Turkey', 'International', 'Where East meets West — Istanbul''s bazaars, mosques, and Bosphorus sunsets.', 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80', TRUE)
ON CONFLICT DO NOTHING;

-- =========================================================
-- HOW TO MAKE A USER ADMIN
-- Run after a user signs up:
-- UPDATE public.profiles SET is_admin = TRUE WHERE id = '<user-uuid>';
-- =========================================================
