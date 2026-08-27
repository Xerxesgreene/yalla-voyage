export interface Testimonial {
  id: string;
  quote: string;
  category: string;
  highlightTag: string;
  trip: string;
  rating: number;
  clientType: string;
  year: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'From private archaeological permits in AlUla to candlelit desert canyon dining, every single hour was pure poetry.',
    category: 'Archaeological Access',
    highlightTag: 'AlUla Royal Oasis & Hegra',
    trip: 'Bespoke Desert Sanctuary',
    rating: 5,
    clientType: 'Private Family Office',
    year: '2026 Dispatch',
  },
  {
    id: '2',
    quote: 'Flawless Maybach logistics, tarmac VIP protocol, and absolute confidentiality across the Kingdom.',
    category: 'Executive Protocol',
    highlightTag: 'Kingdom Executive Summit',
    trip: 'Diplomatic & C-Suite Delegation',
    rating: 5,
    clientType: 'Corporate Global Summit',
    year: '2026 Dispatch',
  },
  {
    id: '3',
    quote: 'Overwater Red Sea villas and sunset catamaran sails. Our senior curator anticipated every unspoken wish.',
    category: 'Overwater Sanctuary',
    highlightTag: 'The Red Sea Archipelago',
    trip: 'Private Island Escape',
    rating: 5,
    clientType: 'Ultra-Luxury Honeymoon',
    year: '2026 Dispatch',
  },
  {
    id: '4',
    quote: 'Haramain VIP rail and panoramic Clock Tower suites made our Umrah deeply peaceful, serene, and effortless.',
    category: 'Spiritual Heritage',
    highlightTag: 'Holy Makkah & Medina Sanctuary',
    trip: 'VIP Umrah & Cultural Extension',
    rating: 5,
    clientType: 'Private Family Pilgrimage',
    year: '2026 Dispatch',
  },
  {
    id: '5',
    quote: 'Direct FBO ramp boarding, bespoke Michelin-standard catering, and seamless helicopter canyon transfers.',
    category: 'VIP Aviation',
    highlightTag: 'Gulfstream Private Charter',
    trip: 'Transcontinental VIP Mobility',
    rating: 5,
    clientType: 'Private Jet Client',
    year: '2026 Dispatch',
  },
  {
    id: '6',
    quote: 'Curated gallery access in Paris and private yacht moorings in Amalfi — absolute precision from start to finish.',
    category: 'Global Sanctuary',
    highlightTag: 'European Grand Tour',
    trip: 'Private Cultural Expedition',
    rating: 5,
    clientType: 'Bespoke Global Traveler',
    year: '2026 Dispatch',
  },
];

export const clientTrustMetrics = [
  { label: 'Curated Mastery', value: '10 Years Experience' },
  { label: 'Client Satisfaction', value: '4.98 / 5.0' },
  { label: 'Tailored Itineraries', value: '100% Bespoke' },
  { label: 'Direct Concierge SLA', value: '< 15 Min' },
];
