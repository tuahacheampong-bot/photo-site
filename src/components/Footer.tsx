import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl tracking-wider text-[#fafafa] mb-4">
              SHEMEN<span className="text-[#d4a853]">MEDIA</span>
            </h3>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">
              Capturing moments that matter and transforming your vision into
              breathtaking realities. Photography &amp; videography that tells your story.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#d4a853] mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/booking", label: "Booking" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#a0a0a0] text-sm hover:text-[#d4a853] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-[#d4a853] mb-4">
              Follow Us
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] text-sm hover:text-[#d4a853] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] text-sm hover:text-[#d4a853] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] text-sm hover:text-[#d4a853] transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2a2a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#606060] text-sm">
            &copy; {currentYear} Shemen Media. All rights reserved.
          </p>
          <p className="text-[#606060] text-sm">
            Built with 📸 and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
