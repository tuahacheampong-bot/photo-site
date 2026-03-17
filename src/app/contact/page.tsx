"use client";

import { useState, FormEvent } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "hello@shemenmedia.com",
    href: "mailto:hello@shemenmedia.com",
    icon: "✉",
  },
  {
    label: "Phone",
    value: "+233 XX XXX XXXX",
    href: "tel:+233XXXXXXXXXX",
    icon: "☎",
  },
  {
    label: "Location",
    value: "Ghana",
    href: null,
    icon: "📍",
  },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "TikTok", href: "https://tiktok.com" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Connect to email service
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
            Get in Touch
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white mb-6">
            Contact Me
          </h1>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Have a question, want to discuss a project, or just say hello?
            I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl text-white mb-8">
                Let&apos;s Connect
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm uppercase tracking-widest text-[#d4a853] mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[#fafafa] hover:text-[#d4a853] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#fafafa]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <h3 className="text-sm uppercase tracking-widest text-[#d4a853] mb-4">
                Follow Along
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm uppercase tracking-widest border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>

              {/* Response time */}
              <div className="mt-12 p-6 bg-[#1a1a1a] border border-[#2a2a2a]">
                <h3 className="text-sm uppercase tracking-widest text-[#d4a853] mb-2">
                  Response Time
                </h3>
                <p className="text-[#a0a0a0] text-sm">
                  I typically respond within 24 hours. For urgent inquiries,
                  please call or send a direct message on Instagram.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-['Playfair_Display'] text-3xl text-white mb-8">
                Send a Message
              </h2>

              {submitted ? (
                <div className="text-center py-16 bg-[#1a1a1a] border border-[#2a2a2a]">
                  <span className="text-5xl mb-4 block">✉️</span>
                  <h3 className="font-['Playfair_Display'] text-2xl text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#a0a0a0]">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-none"
                      />
                    </div>
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
                  </div>

                  <div>
                    <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm uppercase tracking-widest text-[#a0a0a0] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-none resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-sm uppercase tracking-widest bg-[#d4a853] text-[#0a0a0a] font-semibold hover:bg-[#b8923e] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
