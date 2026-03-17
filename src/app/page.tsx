import Link from "next/link";

const categories = [
  { name: "Portrait", slug: "portrait", image: "https://picsum.photos/seed/portrait/800/1000" },
  { name: "Wedding", slug: "wedding", image: "https://picsum.photos/seed/wedding/800/1000" },
  { name: "Event", slug: "event", image: "https://picsum.photos/seed/event/800/1000" },
  { name: "Graduation", slug: "graduation", image: "https://picsum.photos/seed/grad/800/1000" },
  { name: "Fashion", slug: "fashion", image: "https://picsum.photos/seed/fashion/800/1000" },
  { name: "Beauty", slug: "beauty", image: "https://picsum.photos/seed/beauty/800/1000" },
  { name: "Food", slug: "food", image: "https://picsum.photos/seed/food/800/1000" },
  { name: "Product", slug: "product", image: "https://picsum.photos/seed/product/800/1000" },
  { name: "Documentary", slug: "documentary", image: "https://picsum.photos/seed/doc/800/1000" },
];

const clients = [
  "Fashion Magazines",
  "Leading Fashion Houses",
  "Beauty Brands",
  "Lifestyle Campaigns",
  "Non-Profit Organizations",
  "Corporate Projects",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a] z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}
        />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto animate-fade-in">
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
            Photography &amp; Videography
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            Shemen<span className="text-[#d4a853]">Media</span>
          </h1>
          <p className="text-[#a0a0a0] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Capturing moments that matter and transforming your vision into
            breathtaking realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="px-8 py-4 text-sm uppercase tracking-widest bg-[#d4a853] text-[#0a0a0a] font-semibold hover:bg-[#b8923e] transition-all duration-300"
            >
              View Portfolio
            </Link>
            <Link
              href="/booking"
              className="px-8 py-4 text-sm uppercase tracking-widest border border-[#d4a853] text-[#d4a853] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-all duration-300"
            >
              Book a Session
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#a0a0a0] rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-3 bg-[#d4a853] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
            About Us
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-white mb-6">
            We Create Timeless Memories
          </h2>
          <p className="text-[#a0a0a0] text-lg leading-relaxed">
            At Shemen Photography, we specialize in capturing moments that matter
            and transforming your vision into breathtaking realities. Through our
            exceptional photography and videography services, we create timeless
            memories that reflect creativity, precision, and excellence.
          </p>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-10">
            Trusted By
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {clients.map((client) => (
              <div
                key={client}
                className="p-4 border border-[#2a2a2a] text-[#a0a0a0] text-sm hover:border-[#d4a853]/50 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
              Our Expertise
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white">
              Browse by Genre
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/portfolio#${cat.slug}`}
                className="group relative aspect-[3/4] overflow-hidden"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="font-['Playfair_Display'] text-2xl text-white group-hover:text-[#d4a853] transition-colors">
                      {cat.name}
                    </h3>
                    <div className="w-0 group-hover:w-12 h-0.5 bg-[#d4a853] transition-all duration-500 mt-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
            Let&apos;s Create Together
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-6">
            Turn Your Vision Into Reality
          </h2>
          <p className="text-[#a0a0a0] text-lg mb-10 max-w-2xl mx-auto">
            Whether it&apos;s a personal milestone, a corporate event, or a creative
            project — we are here to bring your vision to life. From the first
            click to the final edit, we are committed to exceeding your
            expectations with every frame.
          </p>
          <Link
            href="/booking"
            className="inline-block px-10 py-4 text-sm uppercase tracking-widest bg-[#d4a853] text-[#0a0a0a] font-semibold hover:bg-[#b8923e] transition-all duration-300"
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </>
  );
}
