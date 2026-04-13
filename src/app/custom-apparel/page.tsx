"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

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

const mensItems = [
  { name: "T-Shirts", desc: "Crew neck, V-neck, pocket tees. Everyday wearables with print-ready blank construction.", image: "/images/apparel-mens-tshirt.jpg" },
  { name: "Polo Shirts", desc: "Pique and moisture-wicking options. Ideal for corporate uniforms and golf events.", image: "/images/apparel-mens-polo.jpg" },
  { name: "Sweatshirts", desc: "Crew and hooded styles. Premium fleece blends built for cold-weather promotions.", image: "/images/apparel-mens-hoodie.jpg" },
  { name: "Bottoms", desc: "Shorts, sweatpants, and cargo styles for active and casualwear programs.", image: "/images/apparel-mens-joggers.jpg" },
  { name: "Jackets", desc: "Soft shell, windbreakers, and puffers. Structured outerwear that holds embroidery well.", image: "/images/apparel-mens-jacket.jpg" },
];

const womensItems = [
  { name: "T-Shirts", desc: "Fitted and relaxed cuts in a full color range. Screen printing and DTG ready.", image: "/images/apparel-womens-tshirt.jpg" },
  { name: "Polo Shirts", desc: "Tailored polo styles with moisture management. Professional and promotional.", image: "/images/apparel-womens-polo.jpg" },
  { name: "Dresses", desc: "Casual and semi-formal silhouettes suitable for branded events and uniforms.", image: "/images/apparel-womens-dress.jpg" },
  { name: "Sweatshirts", desc: "Crop, classic, and hoodie styles with soft fleece constructions.", image: "/images/apparel-womens-sweatshirt.jpg" },
  { name: "Jackets", desc: "Lightweight and insulated options engineered for decoration and durability.", image: "/images/apparel-womens-jacket.jpg" },
];

function ProductCard({ item, index }: { item: typeof mensItems[0]; index: number }) {
  return (
    <FadeIn delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="group relative overflow-hidden rounded-2xl bg-white border border-black/8 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-shadow duration-300"
      >
        <div className="relative aspect-square overflow-hidden bg-[#f3f3f3]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-700 text-[#0f0f0f] tracking-tight mb-1">{item.name}</h3>
          <p className="text-xs text-[#3a3a3c] leading-relaxed">{item.desc}</p>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function CustomApparelPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_0%,rgba(185,28,58,0.12)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">Catalog</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-800 tracking-tighter leading-none text-white max-w-3xl">
              Custom apparel,<br />your brand.
            </h1>
            <p className="mt-5 text-base text-white/50 leading-relaxed max-w-[52ch]">
              From everyday tees to structured outerwear, every style is available blank or
              decorated with your artwork via any of our four decoration methods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 20 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            <a href="#mens" className="px-4 py-2 text-xs font-600 text-white/60 bg-white/6 border border-white/10 rounded-xl hover:bg-white/12 hover:text-white transition-all duration-150">
              Men&apos;s
            </a>
            <a href="#womens" className="px-4 py-2 text-xs font-600 text-white/60 bg-white/6 border border-white/10 rounded-xl hover:bg-white/12 hover:text-white transition-all duration-150">
              Women&apos;s
            </a>
          </motion.div>
        </div>
      </section>

      {/* Men's */}
      <section id="mens" className="py-24 px-6 lg:px-10 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-2">Men&apos;s</p>
                <h2 className="text-3xl md:text-4xl font-800 tracking-tighter leading-none text-[#0f0f0f]">
                  Men&apos;s Apparel
                </h2>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-600 text-[#b91c3a] hover:gap-3 transition-all duration-200 self-start md:self-auto">
                Request samples <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {mensItems.map((item, i) => (
              <ProductCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider banner */}
      <div className="py-14 px-6 lg:px-10 bg-[#b91c3a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_100%_50%,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
        <FadeIn>
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <p className="text-2xl md:text-3xl font-800 tracking-tighter text-white leading-tight">
              All styles available blank or<br className="hidden md:block" /> fully decorated.
            </p>
            <Link
              href="/decorating"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-600 text-[#b91c3a] bg-white rounded-xl hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shrink-0"
            >
              View decoration methods <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Women's */}
      <section id="womens" className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-2">Women&apos;s</p>
                <h2 className="text-3xl md:text-4xl font-800 tracking-tighter leading-none text-[#0f0f0f]">
                  Women&apos;s Apparel
                </h2>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-600 text-[#b91c3a] hover:gap-3 transition-all duration-200 self-start md:self-auto">
                Request samples <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {womensItems.map((item, i) => (
              <ProductCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(185,28,58,0.1)_0%,transparent_70%)]" />
        <FadeIn>
          <div className="max-w-[1400px] mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-800 tracking-tighter leading-none text-white mb-4">
              Need something specific?
            </h2>
            <p className="text-sm text-white/50 max-w-[42ch] mx-auto mb-8 leading-relaxed">
              Our catalog is a starting point. Contact us with your requirements and we will source the right blank for your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(185,28,58,0.35)]"
            >
              Contact us <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
