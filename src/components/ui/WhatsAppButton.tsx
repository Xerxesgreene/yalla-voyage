'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';

export function WhatsAppButton() {
  const href = `${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-charcoal text-ivory text-sm px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
        Chat with us
      </span>

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-6 h-6 relative z-10" fill="white" />
      </span>
    </a>
  );
}
