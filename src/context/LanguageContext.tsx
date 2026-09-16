'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Locale, translations, TranslationDictionary } from '@/lib/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  isRTL: boolean;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'yalla_voyage_locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [isMounted, setIsMounted] = useState(false);

  // Initialize from localStorage on client
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === 'en' || saved === 'ar') {
        setLocaleState(saved);
        document.documentElement.lang = saved;
        document.documentElement.dir = 'ltr';
        document.documentElement.setAttribute('data-lang', saved);
      } else {
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        document.documentElement.setAttribute('data-lang', 'en');
      }
    } catch {
      // Fallback in case localStorage is restricted
    }
    setIsMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = 'ltr';
      document.documentElement.setAttribute('data-lang', newLocale);
    } catch {
      // Storage unavailable
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  }, [locale, setLocale]);

  // Do not force RTL layout: translate in-place from where it is
  const isRTL = false;
  const t = useMemo(() => translations[locale], [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      isRTL,
      t,
    }),
    [locale, setLocale, toggleLocale, isRTL, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
