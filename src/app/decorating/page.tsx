"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Printer, TShirt, Palette, Needle, CheckCircle } from "@phosphor-icons/react";

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay, type: "spring", stiffness: 120, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  {
    id: "screen-printing",
    icon: Printer,
    title: "Screen Printing",
    tagline: "Built for scale. Made to last.",
    description:
      "Screen printing remains the gold standard for high-volume apparel decoration. Using custom-cut stencils and premium inks pushed through a fine mesh, each print delivers crisp lines, bold colors, and durability that survives hundreds of washes.",
    features: [
      "Ideal for orders of 24+ pieces",
      "Pantone color matching available",
      "Specialty inks: metallic, puff, discharge",
      "Up to 8-color artwork supported",
      "Water-based and plastisol ink options",
    ],
    image: "/images/decorating-screenprint.jpg",
    flip: false,
  },
  {
    id: "dtg",
    icon: TShirt,
    title: "Direct to Garment",
    tagline: "Photo-quality. No minimums.",
    description:
      "Direct to Garment (DTG) printing uses industrial inkjet technology to apply water-based inks directly into the fabric fibers. The result is a soft-hand feel with photographic-level detail — perfect for complex artwork, gradients, and short runs.",
    features: [
      "No minimum order quantity",
      "Full CMYK + white ink capability",
      "Ideal for photography and fine detail",
      "Soft hand feel — no heavy ink layers",
      "Best on 100% cotton or cotton blends",
    ],
    image: "/images/decorating-dtg.jpg",
    flip: true,
  },
  {
    id: "dye-sublimation",
    icon: Palette,
    title: "Dye Sublimation",
    tagline: "Edge to edge. Permanently bonded.",
    description:
      "Sublimation uses heat to transform solid dye into gas, which then bonds permanently with polyester fibers. The ink becomes part of the garment — not a layer on top of it. The result is an all-over, full-color print that will never peel, crack, or fade.",
    features: [
      "All-over, edge-to-edge coverage",
      "Unlimited color complexity",
      "Permanent — ink fuses into fabric",
      "Best on 100% polyester materials",
      "Ideal for performance and athletic wear",
    ],
    image: "/images/decorating-sublimation.jpg",
    flip: false,
  },
  {
    id: "embroidery",
    icon: Needle,
    title: "Embroidery",
    tagline: "Texture that signals quality.",
    description:
      "Embroidery translates your artwork into thousands of precisely placed thread stitches. The raised, dimensional result communicates craftsmanship and permanence — ideal for corporate logos, polo shirts, caps, and structured outerwear.",
    features: [
      "Up to 15 thread colors per design",
      "3D puff embroidery available",
      "Suitable for caps, polos, jackets",
      "Digitizing included with order",
      "Withstands industrial laundering",
    ],
    image: "/images/decorating-embroidery.jpg",
    flip: true,
  },
];

export default function DecoratingPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_0%_50%,rgba(185,28,58,0.12)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">Services</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-800 tracking-tighter leading-none text-white max-w-3xl">
              Four methods.<br />One standard.
            </h1>
            <p className="mt-5 text-base text-white/50 leading-relaxed max-w-[54ch]">
              Every decoration technique we offer is produced in-house at our Valencia facility.
              That means consistent quality, faster turnarounds, and direct accountability.
            </p>
          </motion.div>

          {/* Quick nav */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 20 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 text-xs font-600 text-white/60 bg-white/6 border border-white/10 rounded-xl hover:bg-white/12 hover:text-white transition-all duration-150"
              >
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <div className="bg-white">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 px-6 lg:px-10 ${idx % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}
            >
              <div className="max-w-[1400px] mx-auto">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${service.flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  {/* Text */}
                  <FadeIn>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#b91c3a] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(185,28,58,0.25)]">
                        <Icon size={18} weight="fill" />
                      </div>
                      <span className="text-xs font-600 tracking-widest uppercase text-[#3a3a3c]">
                        {service.title}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-3">
                      {service.tagline}
                    </h2>
                    <p className="text-base text-[#3a3a3c] leading-relaxed max-w-[54ch] mb-8">
                      {service.description}
                    </p>

                    <div className="space-y-px mb-8">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3 py-3 border-b border-black/5 last:border-0">
                          <CheckCircle size={16} weight="fill" className="text-[#b91c3a] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#1c1c1e] font-500">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200"
                    >
                      Request a quote <ArrowRight size={15} weight="bold" />
                    </Link>
                  </FadeIn>

                  {/* Image */}
                  <FadeIn delay={0.15}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.18)]"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                    </motion.div>
                  </FadeIn>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(185,28,58,0.1)_0%,transparent_70%)]" />
        <FadeIn>
          <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-800 tracking-tighter leading-none text-white mb-2">
                Not sure which method fits your project?
              </h2>
              <p className="text-sm text-white/50">Our team will recommend the right process for your art and quantity.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(185,28,58,0.3)] shrink-0"
            >
              Ask our team <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
