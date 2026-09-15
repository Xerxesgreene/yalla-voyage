'use client';

import { useState, useMemo } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/site';

const saudiDestinations = [
  'AlUla',
  'Diriyah',
  'Jeddah',
  'Riyadh',
  'Madinah',
  'King Abdullah Economic City',
  'Yanbu',
  'Al Baha',
  'Amaala',
  'Al Ahsa',
  'Abha & Asir',
  'Taif',
  'Wadi Al Disah',
  'The Red Sea Project',
];

const internationalDestinations = [
  'Cairo & The Nile, Egypt',
  'Amalfi Coast & Rome, Italy',
  'Swiss Alps, Switzerland',
  'Mauritius Island Sanctuary',
  'Dubai & Abu Dhabi, UAE',
  'Paris & Côte d’Azur, France',
  'Santorini & Cyclades, Greece',
  'Tokyo & Kyoto, Japan',
  'Maldives Sanctuary',
  'Bali & Komodo, Indonesia',
  'Istanbul & Cappadocia, Turkey',
  'Custom / Multi-Destination',
];

const serviceOptions = [
  'Bespoke Luxury Holidays',
  'Wellness & Retreat',
  'Educational Tours',
  'Ladies Trips',
  'Corporate Travel & MICE',
  'Private Jet & VIP Transfers',
  'Curated Saudi Expeditions',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    service: '',
    travelDate: '',
    travellers: '2',
    message: '',
  });

  // Calculate minimum selectable date (today) in YYYY-MM-DD format
  const today = useMemo(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*Yalla Voyage Inquiry*`,
      form.name ? `• Name: ${form.name}` : '',
      form.email ? `• Email: ${form.email}` : '',
      form.phone ? `• Phone: ${form.phone}` : '',
      form.destination ? `• Destination: ${form.destination}` : '',
      form.service ? `• Service: ${form.service}` : '',
      form.travelDate ? `• Date: ${form.travelDate}` : '',
      form.travellers ? `• Guests: ${form.travellers}` : '',
      form.message ? `• Notes: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(lines)}`, '_blank');
  };

  return (
    <main className="bg-[#F4EFE6] text-[#0F2E23] overflow-hidden">
      <PageHero
        title="Begin Your Journey"
        subtitle="Direct concierge access for bespoke itineraries, private aviation, and luxury escapes."
        image="/images/header-real-contact.jpg"
        alt="Bora Bora Turquoise Lagoon, French Polynesia"
        positionClass="object-center"
      />

      <section className="section-pad bg-[#F4EFE6]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Direct Contact Info (Clean & Focused) */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2E6B57] font-semibold block mb-2">
                  Direct Stewardship
                </span>
                <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl text-[#0F2E23] mb-3 leading-tight font-light">
                  Let&apos;s architect your next journey.
                </h2>
                <p className="text-[#0F2E23]/75 text-base sm:text-lg leading-relaxed font-light font-sans">
                  Whether it&apos;s a private jet across continents, an AlUla desert buyout, or a multi-destination itinerary, our senior curators are at your disposal.
                </p>
              </Reveal>

              {/* Direct Channels */}
              <div className="space-y-3 pt-2">
                <Reveal delay={0.1}>
                  <a
                    href={`${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-[#25D366]/30 hover:border-[#25D366] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                      <MessageCircle className="w-5 h-5" fill="white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-[#0F2E23]">WhatsApp</p>
                      <p className="text-[#0F2E23]/60 text-xs mt-0.5 font-sans">Quick message response</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2E6B57] group-hover:translate-x-1 transition-transform" />
                  </a>
                </Reveal>

                <Reveal delay={0.15}>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-[#0F2E23]/10 hover:border-[#2E6B57] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0F2E23] flex items-center justify-center flex-shrink-0 text-[#F4EFE6] shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-[#0F2E23]">Phone</p>
                      <p className="text-[#0F2E23]/60 text-xs mt-0.5 font-mono">{siteConfig.phone}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2E6B57] group-hover:translate-x-1 transition-transform" />
                  </a>
                </Reveal>

                <Reveal delay={0.2}>
                  <a
                    href="mailto:info@yallavoyage.com"
                    className="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-[#0F2E23]/10 hover:border-[#2E6B57] hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0F2E23]/8 flex items-center justify-center flex-shrink-0 text-[#2E6B57]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-[#0F2E23]">Email</p>
                      <p className="text-[#0F2E23]/60 text-xs mt-0.5 font-sans">info@yallavoyage.com</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#2E6B57] group-hover:translate-x-1 transition-transform" />
                  </a>
                </Reveal>

                <Reveal delay={0.25}>
                  <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white border border-[#0F2E23]/10">
                    <div className="w-11 h-11 rounded-xl bg-[#0F2E23]/8 flex items-center justify-center flex-shrink-0 text-[#2E6B57] mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#0F2E23]">Location</p>
                      <p className="text-[#0F2E23]/60 text-xs mt-0.5 leading-relaxed font-sans">{siteConfig.address.full}</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: Clean, Structured Inquiry Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="bg-white rounded-3xl border border-[#0F2E23]/10 p-6 sm:p-8 md:p-10 shadow-lg">
                  <div className="mb-6 pb-4 border-b border-[#0F2E23]/10">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2E6B57] font-semibold block mb-1">
                      Inquiry Form
                    </span>
                    <h3 className="text-display text-2xl sm:text-3xl text-[#0F2E23] font-light">
                      Send Us a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmitWhatsApp} className="space-y-4 sm:space-y-5">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#0F2E23] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          minLength={2}
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#0F2E23]/15 bg-[#F4EFE6]/40 text-[#0F2E23] text-sm focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 transition-all font-sans"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#0F2E23] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#0F2E23]/15 bg-[#F4EFE6]/40 text-[#0F2E23] text-sm focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 transition-all font-sans"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#0F2E23] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#0F2E23]/15 bg-[#F4EFE6]/40 text-[#0F2E23] text-sm focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 transition-all font-sans"
                          placeholder="+966 50 000 0000"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-destination" className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#0F2E23] mb-1.5">
                          Destination
                        </label>
                        <select
                          id="contact-destination"
                          name="destination"
                          value={form.destination}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#0F2E23]/15 bg-[#F4EFE6]/40 text-[#0F2E23] text-sm focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 transition-all font-sans"
                        >
                          <option value="">Select a Destination</option>
                          <optgroup label="Saudi Arabia">
                            {saudiDestinations.map((d) => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </optgroup>
                          <optgroup label="International">
                            {internationalDestinations.map((d) => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Service, Date & Guests */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#0F2E23] mb-1.5">
                          Service
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#0F2E23]/15 bg-[#F4EFE6]/40 text-[#0F2E23] text-sm focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 transition-all font-sans"
                        >
                          <option value="">Select Service</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-date" className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#0F2E23] mb-1.5">
                          Travel Date
                        </label>
                        <input
                          id="contact-date"
                          name="travelDate"
                          type="date"
                          min={today}
                          value={form.travelDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#0F2E23]/15 bg-[#F4EFE6]/40 text-[#0F2E23] text-sm focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 transition-all font-sans"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-travellers" className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#0F2E23] mb-1.5">
                          Guests
                        </label>
                        <input
                          id="contact-travellers"
                          name="travellers"
                          type="number"
                          min="1"
                          max="50"
                          step="1"
                          value={form.travellers}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#0F2E23]/15 bg-[#F4EFE6]/40 text-[#0F2E23] text-sm focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider font-semibold text-[#0F2E23] mb-1.5">
                        Message / Notes
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#0F2E23]/15 bg-[#F4EFE6]/40 text-[#0F2E23] text-sm focus:outline-none focus:border-[#2E6B57] focus:ring-2 focus:ring-[#2E6B57]/20 transition-all resize-none font-sans"
                        placeholder="Tell us about your trip dates, preferred activities, or questions..."
                      />
                    </div>

                    {/* Submit Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button
                        type="submit"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F2E23] text-[#F4EFE6] hover:bg-[#2E6B57] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer font-sans"
                      >
                        <MessageCircle className="w-4 h-4 text-[#25D366]" /> Send via WhatsApp
                      </button>
                      <a
                        href={`mailto:info@arabiaguidetravel.com?subject=${encodeURIComponent(
                          `Yalla Voyage Inquiry: ${form.name || 'Travel Request'}`
                        )}&body=${encodeURIComponent(
                          `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDestination: ${form.destination}\nService: ${form.service}\nDates: ${form.travelDate}\nGuests: ${form.travellers}\nNotes: ${form.message}`
                        )}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#0F2E23]/20 text-[#0F2E23] hover:bg-[#0F2E23] hover:text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-all duration-300 font-sans"
                      >
                        <Send className="w-3.5 h-3.5" /> Send via Email
                      </a>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

