"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

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

const accessories = [
  {
    name: "Custom Blankets",
    desc: "Plush, woven, and fleece blankets available for sublimation, embroidery, or screen printing. Perfect for high-end branded gifting programs.",
    features: ["Sublimation-ready plush fleece", "Woven jacquard patterns", "Full-bleed print coverage", "Available in multiple sizes", "Retail-quality packaging options"],
    image: "/images/accessories-blanket.jpg",
    highlight: true,
  },
  {
    name: "Bags & Totes",
    desc: "Canvas, nylon, and recycled material bags. Custom dimensions and pocket configurations available for trade show and corporate programs.",
    features: ["Screen print and embroidery decoration", "Multiple material options", "Custom dimensions available"],
    image: "/images/accessories-tote.jpg",
    highlight: false,
  },
  {
    name: "Headwear",
    desc: "Structured and unstructured caps, beanies, and visors. Embroidery and sublimation-ready blanks built for your brand.",
    features: ["Embroidery and patch options", "Structured and unstructured styles", "Custom color matching"],
    image: "/images/accessories-cap.jpg",
    highlight: false,
  },
  {
    name: "Specialty Items",
    desc: "Have a specific accessory in mind? We source and decorate a wide range of branded merchandise beyond standard categories.",
    features: ["Custom sourcing available", "Branded packaging", "Low minimums on specialty runs"],
    image: "/images/accessories-specialty.jpg",
    highlight: false,
  },
];

export default function CustomAccessoriesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_100%,rgba(185,28,58,0.1)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">Accessories</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-800 tracking-tighter leading-none text-white max-w-3xl">
              Beyond the shirt.
            </h1>
            <p className="mt-5 text-base text-white/50 leading-relaxed max-w-[52ch]">
              Complete your branded merchandise program with custom accessories decorated to the same standard as our apparel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero accessory — Blankets */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">Featured</p>
              <h2 className="text-4xl md:text-5xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-4">
                Custom Blankets
              </h2>
              <p className="text-base text-[#3a3a3c] leading-relaxed max-w-[54ch] mb-8">
                Plush, woven, and fleece blankets available for sublimation, embroidery, or screen
                printing. P3 blankets are a premium choice for corporate gifting programs, event
                giveaways, and retail merchandise lines. Full-bleed sublimation means your artwork
                covers every inch with photographic fidelity.
              </p>
              <div className="space-y-px mb-8">
                {accessories[0].features.map((feat) => (
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
                Get a blanket quote <ArrowRight size={15} weight="bold" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src={accessories[0].image}
                  alt="Custom printed blankets"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Other accessories grid */}
      <section className="py-24 px-6 lg:px-10 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-3">More Accessories</p>
            <h2 className="text-3xl md:text-4xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-12">
              Complete the program.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accessories.slice(1).map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-black/8 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-700 text-[#0f0f0f] tracking-tight mb-1.5">{item.name}</h3>
                    <p className="text-sm text-[#3a3a3c] leading-relaxed mb-4">{item.desc}</p>
                    <div className="space-y-1.5">
                      {item.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-[#b91c3a] shrink-0" />
                          <span className="text-xs text-[#3a3a3c] font-500">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(185,28,58,0.1)_0%,transparent_70%)]" />
        <FadeIn>
          <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-800 tracking-tighter leading-none text-white mb-2">
                Ready to build your accessories program?
              </h2>
              <p className="text-sm text-white/50">We will source, decorate, and deliver.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(185,28,58,0.3)] shrink-0"
            >
              Get a quote <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
