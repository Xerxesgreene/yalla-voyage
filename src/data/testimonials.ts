export interface Testimonial {
  id: string;
  author: string;
  initials: string;
  trip: string;
  destination: string;
  category: string;
  rating: number;
  review: string;
  verifiedText: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'The Al-Mansoor Family',
    initials: 'AM',
    trip: 'Family Holiday in Saudi Arabia',
    destination: 'AlUla & The Red Sea',
    category: 'Family Holiday',
    rating: 5,
    review:
      'We booked a 10-day holiday across AlUla and the Red Sea with our three children. Everything from private stargazing among the sandstone canyons to snorkeling with turtles was organized with so much warmth and care. The kids were engaged every single day, and having our coordinator check in on WhatsApp gave us complete peace of mind.',
    verifiedText: 'Verified Traveler',
  },
  {
    id: '2',
    author: 'Sarah & Tariq K.',
    initials: 'ST',
    trip: 'European Honeymoon',
    destination: 'Amalfi Coast & Swiss Alps',
    category: 'Honeymoon',
    rating: 5,
    review:
      'Yalla Voyage planned our dream honeymoon across Positano and Switzerland. Having our private boat tour along the Amalfi cliffs and panoramic Glacier Express train seats booked in advance made the entire experience effortless, intimate, and magical. Truly the best journey of our lives!',
    verifiedText: 'Verified Traveler',
  },
  {
    id: '3',
    author: 'Dr. Faisal & Leila H.',
    initials: 'FL',
    trip: 'Saudi Heritage Expedition',
    destination: 'Diriyah, Al-Balad & Al Ahsa',
    category: 'Cultural Discovery',
    rating: 5,
    review:
      'We wanted to explore Saudi heritage with our teenagers. Walking through the quiet coral stone alleys of historic Al-Balad in Jeddah at dusk and watching the golden sunset over the At-Turaif citadel in Diriyah with our private local historian was unforgettable. Superb hospitality and seamless transport.',
    verifiedText: 'Verified Traveler',
  },
  {
    id: '4',
    author: 'Ahmed & Mariam R.',
    initials: 'AM',
    trip: 'Spiritual Pilgrimage & Family Stay',
    destination: 'Madinah & Makkah',
    category: 'Spiritual Journey',
    rating: 5,
    review:
      'Our pilgrimage with my elderly parents was completely smooth and stress-free. Our hotel room overlooked the Prophet’s Mosque courtyard, and private wheelchair-accessible transfers were waiting for us at every train station. We could focus entirely on our worship without any logistical worries.',
    verifiedText: 'Verified Traveler',
  },
  {
    id: '5',
    author: 'Elena & Marcus V.',
    initials: 'EV',
    trip: '15th Anniversary Getaway',
    destination: 'Paris & Côte d’Azur',
    category: 'Anniversary Trip',
    rating: 5,
    review:
      'We celebrated our anniversary traveling from Paris to the French Riviera. The private twilight river cruise on the Seine and the charming boutique hotel in Nice were absolute highlights. The team even had fresh flowers and local pastries waiting in our room. Wonderful, thoughtful service.',
    verifiedText: 'Verified Traveler',
  },
  {
    id: '6',
    author: 'Zaid & Noor S.',
    initials: 'ZN',
    trip: 'Autumn Cultural Tour',
    destination: 'Kyoto & Tokyo, Japan',
    category: 'Cultural Discovery',
    rating: 5,
    review:
      'Our autumn trip to Japan exceeded all expectations. The peaceful morning walk through Kyoto’s bamboo groves before the crowds, our traditional ryokan stay with private onsen baths, and the seamless Shinkansen bullet train transfers made it pure poetry. We will definitely travel with Yalla Voyage again.',
    verifiedText: 'Verified Traveler',
  },
];

export const clientTrustMetrics = [
  { label: 'Travel Mastery', value: '20+ Years' },
  { label: 'Client Satisfaction', value: '4.98 / 5.0' },
  { label: 'Custom Itineraries', value: '100% Bespoke' },
  { label: 'Dedicated Concierge', value: '24/7 Care' },
];
