"use client";

import { useState, FormEvent } from "react";

const packages = [
  {
    name: "Essential",
    price: "£250",
    duration: "1-2 hours",
    features: [
      "Up to 1-hour shoot",
      "50+ edited photos",
      "Online gallery",
      "Print release",
      "2-week delivery",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "£450",
    duration: "3-4 hours",
    features: [
      "Up to 3-hour shoot",
      "150+ edited photos",
      "Online gallery",
      "Print release",
      "1-week delivery",
      "1 large canvas print",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "£750",
    duration: "Full day",
    features: [
      "Full day coverage",
      "300+ edited photos",
      "Online gallery",
      "Print release",
      "Priority delivery",
      "Photo album",
      "Second shooter option",
    ],
    popular: false,
  },
];

const serviceTypes = [
  "Wedding",
  "Pre-Graduation",
  "Graduation",
  "Event",
  "Baby/Portrait",
  "Other",
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to backend/email service
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
            Packages
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white mb-6">
            Book Your Session
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Choose a package that fits your needs. Every package includes
            professional editing and a beautiful online gallery.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                onClick={() => setSelectedPackage(pkg.name)}
                className={`relative p-8 border cursor-pointer transition-all duration-300 ${
                  selectedPackage === pkg.name
                    ? "border-[#d4a853] bg-[#d4a853]/5"
                    : "border-[#2a2a2a] hover:border-[#d4a853]/50"
                } ${pkg.popular ? "md:-mt-4 md:mb-4" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#d4a853] text-[#0a0a0a] text-xs uppercase tracking-widest font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="font-['Playfair_Display'] text-2xl text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-[#d4a853] text-4xl font-semibold mb-1">
                  {pkg.price}
                </p>
                <p className="text-[#a0a0a0] text-sm mb-6">{pkg.duration}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-[#a0a0a0]"
                    >
                      <span className="text-[#d4a853]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 px-6 bg-[#1a1a1a]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl text-white mb-4">
              Request a Booking
            </h2>
            <p className="text-[#a0a0a0]">
              Fill in the details below and I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 bg-[#0a0a0a] border border-[#2a2a2a]">
              <span className="text-5xl mb-4 block">🎉</span>
              <h3 className="font-['Playfair_Display'] text-2xl text-white mb-2">
                Booking Request Sent!
              </h3>
              <p className="text-[#a0a0a0]">
                Thank you! I&apos;ll review your request and get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 rounded-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    required
                    className="w-full px-4 py-3 rounded-none"
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 rounded-none"
                  />
                </div>
              </div>

              {selectedPackage && (
                <div>
                  <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                    Selected Package
                  </label>
                  <input
                    type="text"
                    name="package"
                    value={selectedPackage}
                    readOnly
                    className="w-full px-4 py-3 rounded-none bg-[#d4a853]/10 border-[#d4a853]/30"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                  Tell Me About Your Vision
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-none resize-none"
                  placeholder="Tell me about your event, location ideas, style preferences..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-sm uppercase tracking-widest bg-[#d4a853] text-[#0a0a0a] font-semibold hover:bg-[#b8923e] transition-all duration-300"
              >
                Submit Booking Request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
