'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Locale } from '@/lib/translations';

interface LanguageSelectorProps {
  isScrolledDark?: boolean;
  variant?: 'navbar' | 'mobile';
  className?: string;
}

export function LanguageSelector({
  isScrolledDark = false,
  variant = 'navbar',
  className = '',
}: LanguageSelectorProps) {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (lang: Locale) => {
    setLocale(lang);
    setIsOpen(false);
  };

  const languages: { code: Locale; label: string; nativeName: string }[] = [
    { code: 'en', label: 'English', nativeName: 'EN' },
    { code: 'ar', label: 'العربية', nativeName: 'AR' },
  ];

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 ${className}`}>
        <button
          onClick={() => setLocale('en')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
            locale === 'en'
              ? 'bg-[#39C27D] text-[#071912] font-semibold shadow-md'
              : 'text-[#F4EFE6]/70 hover:text-white'
          }`}
          aria-label="Switch to English"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>English</span>
          {locale === 'en' && <Check className="w-3 h-3 ml-0.5" />}
        </button>

        <button
          onClick={() => setLocale('ar')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-sans font-medium transition-all duration-300 ${
            locale === 'ar'
              ? 'bg-[#39C27D] text-[#071912] font-bold shadow-md'
              : 'text-[#F4EFE6]/70 hover:text-white'
          }`}
          aria-label="التبديل إلى العربية"
        >
          <span>العربية</span>
          {locale === 'ar' && <Check className="w-3 h-3 ml-0.5" />}
        </button>
      </div>
    );
  }

  // Desktop / Navbar Dropdown Variant
  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Select Language"
        className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 border cursor-pointer select-none ${
          isScrolledDark
            ? 'bg-white/10 hover:bg-white/20 text-[#F4EFE6] border-[#2E6B57]/40 shadow-xs'
            : 'bg-white/80 hover:bg-white text-[#0F2E23] border-[#0F2E23]/15 shadow-2xs hover:border-[#2E6B57]/40'
        }`}
      >
        <Globe
          className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45 ${
            isScrolledDark ? 'text-[#39C27D]' : 'text-[#2E6B57]'
          }`}
        />
        <span className="font-sans font-semibold uppercase tracking-wider text-[11px]">
          {locale === 'en' ? 'EN' : 'العربية'}
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#39C27D]' : 'opacity-60'
          }`}
        />
      </button>

      {/* Floating Dropdown Card */}
      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-44 origin-top-right rounded-2xl bg-[#081812]/96 backdrop-blur-2xl border border-[#2E6B57]/40 shadow-2xl shadow-black/40 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
        >
          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#39C27D]/80 border-b border-white/8 mb-1">
            {locale === 'en' ? 'Choose Language' : 'اختر اللغة'}
          </div>

          {languages.map((item) => {
            const isSelected = locale === item.code;
            return (
              <button
                key={item.code}
                role="menuitem"
                onClick={() => handleSelect(item.code)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs text-left rtl:text-right transition-colors cursor-pointer group ${
                  isSelected
                    ? 'bg-[#2E6B57]/35 text-[#39C27D] font-semibold'
                    : 'text-[#F4EFE6]/85 hover:text-white hover:bg-white/8'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-mono font-bold uppercase ${
                      isSelected
                        ? 'bg-[#39C27D] text-[#071912]'
                        : 'bg-white/10 text-[#DAD6CD] group-hover:bg-white/20'
                    }`}
                  >
                    {item.nativeName}
                  </span>
                  <span className="font-sans text-xs">{item.label}</span>
                </div>

                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-[#39C27D]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
