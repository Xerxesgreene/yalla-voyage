// lib/types.ts - Application TypeScript types

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: Record<string, unknown>;
  cover_image: string | null;
  category: string | null;
  status: 'draft' | 'published';
  author_id: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string | null;
  image_url: string | null;
  is_featured: boolean;
}

export interface Package {
  id: string;
  title: string;
  destination_id: string;
  duration_days: number;
  price_sar: number;
  description: string | null;
  features: string[];
  image_url: string | null;
  is_active: boolean;
  destination?: Destination;
}

