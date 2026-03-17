import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50K+", label: "Photos Delivered" },
  { value: "10+", label: "Genres Covered" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = [
  {
    title: "Creativity",
    description:
      "We push creative boundaries to deliver visuals that stand out. Every project is a canvas for innovation.",
    icon: "✦",
  },
  {
    title: "Precision",
    description:
      "From composition to final edit, every detail matters. We obsess over the small things so you don't have to.",
    icon: "◆",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard. Anything less than exceptional isn't good enough.",
    icon: "★",
  },
  {
    title: "Connection",
    description:
      "Every client is unique. We take the time to understand your vision and tailor our approach accordingly.",
    icon: "♥",
  },
];

const genres = [
  "Portrait",
  "Event",
  "Wedding",
  "Pre-Graduation/Graduation",
  "Documentary",
  "Food",
  "Product",
  "Fashion",
  "Editorial",
  "Beauty",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
                About Shemen Media
              </p>
              <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white mb-6">
                Transforming Visions Into
                <span className="text-[#d4a853]"> Breathtaking Realities</span>
              </h1>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  At Shemen Photography, we specialize in capturing moments that
                  matter and transforming your vision into breathtaking realities.
                  Through our exceptional photography and videography services, we
                  create timeless memories that reflect creativity, precision, and
                  excellence.
                </p>
                <p>
                  With a diverse portfolio that spans industries and sectors, we&apos;ve
                  had the honor of collaborating with esteemed fashion magazines,
                  leading fashion houses, prestigious beauty brands, and inspiring
                  lifestyle campaigns. Our work also extends to impactful non-profit
                  organizations and corporate projects.
                </p>
                <p>
                  At Shemen Media, we understand that every client is unique. We are
                  dedicated to delivering an unmatched experience tailored to your
                  specific needs. By entrusting us with your memories, we promise to
                  transform them into living stories — moments you&apos;ll cherish forever.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-['Playfair_Display'] text-3xl text-[#d4a853]">
                      {stat.value}
                    </p>
                    <p className="text-[#a0a0a0] text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/team/600/800"
                  alt="Shemen Media team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#d4a853]/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Genres */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
              Our Expertise
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl text-white">
              Genres We Cover
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {genres.map((genre) => (
              <span
                key={genre}
                className="px-5 py-2.5 text-sm uppercase tracking-widest text-[#a0a0a0] border border-[#2a2a2a] hover:border-[#d4a853] hover:text-[#d4a853] transition-all duration-300"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
              Our Commitment
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white">
              What Drives Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#d4a853]/50 transition-colors duration-300"
              >
                <span className="text-3xl text-[#d4a853] mb-4 block">
                  {value.icon}
                </span>
                <h3 className="font-['Playfair_Display'] text-xl text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-6">
            Let&apos;s Create Together
          </h2>
          <p className="text-[#a0a0a0] text-lg mb-10">
            From the first click to the final edit, we are committed to
            exceeding your expectations with every frame.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 text-sm uppercase tracking-widest bg-[#d4a853] text-[#0a0a0a] font-semibold hover:bg-[#b8923e] transition-all duration-300"
            >
              Book a Session
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 text-sm uppercase tracking-widest border border-[#d4a853] text-[#d4a853] hover:bg-[#d4a853] hover:text-[#0a0a0a] transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
