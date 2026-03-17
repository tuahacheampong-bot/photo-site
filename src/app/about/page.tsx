import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Events Covered" },
  { value: "50K+", label: "Photos Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = [
  {
    title: "Authenticity",
    description:
      "I believe the best photos come from real moments. I capture genuine emotions, not forced poses.",
    icon: "✦",
  },
  {
    title: "Quality",
    description:
      "Every image is carefully edited and delivered in the highest resolution. No shortcuts.",
    icon: "◆",
  },
  {
    title: "Connection",
    description:
      "Building rapport with my clients is key to capturing their true essence on camera.",
    icon: "♥",
  },
  {
    title: "Storytelling",
    description:
      "Every session tells a story. My job is to make sure your story is told beautifully.",
    icon: "◎",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
                About Me
              </p>
              <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white mb-6">
                The Person Behind the Lens
              </h1>
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Hi, I&apos;m a professional photographer based in the UK with a
                  passion for capturing life&apos;s most meaningful moments.
                  What started as a hobby quickly turned into a calling — and
                  I&apos;ve never looked back.
                </p>
                <p>
                  From the emotional moments of a wedding ceremony to the joy
                  of a graduation day, I specialize in making every shot count.
                  My style blends candid documentary moments with beautifully
                  composed portraits.
                </p>
                <p>
                  When I&apos;m not behind the camera, you&apos;ll find me editing at a
                  coffee shop, exploring new locations, or planning my next
                  creative project.
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
                  src="https://picsum.photos/seed/photographer/600/800"
                  alt="Photographer portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#d4a853]/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4a853] text-sm uppercase tracking-[0.3em] mb-4">
              My Philosophy
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white">
              What I Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#d4a853]/50 transition-colors duration-300"
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-white mb-6">
            Want to Work Together?
          </h2>
          <p className="text-[#a0a0a0] text-lg mb-10">
            I&apos;d love to hear about your project. Let&apos;s make something
            beautiful.
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
