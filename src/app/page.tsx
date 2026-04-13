"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Needle,
  Printer,
  TShirt,
  Star,
  CheckCircle,
} from "@phosphor-icons/react";

const stats = [
  { value: "36+", label: "Years in business" },
  { value: "4", label: "Decoration methods" },
  { value: "ASI", label: "#75614 certified" },
  { value: "CA", label: "Valencia, CA" },
];

const services = [
  {
    title: "Screen Printing",
    description: "Vibrant, durable prints for large runs. Industry-standard quality at scale.",
    href: "/decorating#screen-printing",
    icon: Printer,
    image: "/images/screen_printing.png",
  },
  {
    title: "Direct to Garment",
    description: "Full-color detail for small batches. No minimums, photo-realistic output.",
    href: "/decorating#dtg",
    icon: TShirt,
    image: "/images/decorating-dtg.jpg",
  },
  {
    title: "Dye Sublimation",
    description: "All-over prints that become part of the fabric. Permanent, edge-to-edge.",
    href: "/decorating#dye-sublimation",
    icon: Star,
    image: "/images/decorating-sublimation.jpg",
  },
  {
    title: "Embroidery",
    description: "Raised, textured logos that signal quality. Premium for corporate and uniform.",
    href: "/decorating#embroidery",
    icon: Needle,
    image: "/images/decorating-embroidery.jpg",
  },
];

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  return (
    <FadeIn delay={index * 0.07}>
      <Link href={service.href} className="group block h-full">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative overflow-hidden rounded-2xl bg-white border border-black/8 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] transition-shadow duration-300 h-full flex flex-col"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute top-4 left-4 p-2.5 bg-[#b91c3a] rounded-xl text-white shadow-[0_4px_12px_rgba(185,28,58,0.3)]">
              <Icon size={18} weight="fill" />
            </div>
          </div>
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-base font-700 text-[#0f0f0f] tracking-tight mb-1.5">
              {service.title}
            </h3>
            <p className="text-sm text-[#3a3a3c] leading-relaxed flex-1">{service.description}</p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-600 text-[#b91c3a] group-hover:gap-2.5 transition-all duration-200">
              <span>Learn more</span>
              <ArrowRight size={12} weight="bold" />
            </div>
          </div>
        </motion.div>
      </Link>
    </FadeIn>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0f0f0f]"
      >
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-65"
        >
          <source src="/videos/p3_hero_video.mp4" type="video/mp4" />
        </video>

        {/* Dark base scrim so text always has contrast */}
        <div className="absolute inset-0 z-[1] pointer-events-none bg-[#0f0f0f]/25" />

        {/* Inward vignette — fades all four edges into the site background */}
        <div className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 110% 110% at 50% 50%, transparent 38%, #0f0f0f 82%),
              linear-gradient(to bottom, #0f0f0f 0%, transparent 18%, transparent 78%, #0f0f0f 100%)
            `,
          }}
        />

        {/* Subtle brand tint */}
        <div className="absolute inset-0 z-[3] pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(185,28,58,0.08)_0%,transparent_70%)]" />

        {/* Centered content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-16 flex flex-col items-center text-center w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 120, damping: 20 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-xs font-500 text-white/70 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#b91c3a] animate-pulse" />
            Valencia, CA · ASI #75614
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
            className="text-5xl md:text-6xl lg:text-7xl font-800 tracking-tighter leading-none text-white max-w-4xl"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)" }}
          >
            Apparel built{" "}
            <span className="text-[#d42448]">to outlast</span>{" "}
            the trend.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 100, damping: 20 }}
            className="mt-6 text-base text-white/80 leading-relaxed max-w-[52ch]"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
          >
            For 36 years, P3 has designed and manufactured custom apparel and accessories
            for the branded merchandise industry. Distributed across the country. Built to spec.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            className="mt-8 flex flex-wrap gap-3 justify-center"
          >
            <Link
              href="/custom-apparel"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] active:translate-y-px transition-all duration-200 shadow-[0_4px_16px_rgba(185,28,58,0.3)]"
            >
              Browse Apparel
              <ArrowRight size={15} weight="bold" />
            </Link>
            <Link
              href="/decorating"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-600 text-white/80 bg-white/8 border border-white/12 rounded-xl hover:bg-white/14 active:scale-[0.98] transition-all duration-200"
            >
              Our Services
            </Link>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, type: "spring", stiffness: 100, damping: 20 }}
            className="mt-14 flex flex-wrap justify-center gap-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2.5 px-4 py-2.5 bg-white/6 backdrop-blur-sm border border-white/10 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <span className="text-base font-800 tracking-tighter text-white">{stat.value}</span>
                <span className="text-xs text-white/45 font-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] tracking-widest uppercase text-white/30 font-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-3">
                  Decoration Methods
                </p>
                <h2 className="text-4xl md:text-5xl font-800 tracking-tighter leading-none text-[#0f0f0f]">
                  Four ways to<br />make it yours.
                </h2>
              </div>
              <Link
                href="/decorating"
                className="inline-flex items-center gap-2 text-sm font-600 text-[#b91c3a] hover:gap-3 transition-all duration-200 self-start md:self-auto"
              >
                All services <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── APPAREL CATEGORIES ───────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-3">
                Product Range
              </p>
              <h2 className="text-4xl md:text-5xl font-800 tracking-tighter leading-none text-[#0f0f0f]">
                Every category,<br />fully customized.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Tall card — Men's */}
            <FadeIn delay={0} className="md:row-span-2">
              <Link href="/custom-apparel#mens" className="group block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative overflow-hidden rounded-3xl bg-[#0f0f0f] min-h-[420px] md:h-full flex flex-col justify-end p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.15)]"
                >
                  <Image
                    src="/images/home-bento-mens.jpg"
                    alt="Men's apparel collection"
                    fill
                    className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-xs font-500 tracking-widest uppercase text-white/50 mb-2">Men&apos;s</p>
                    <h3 className="text-2xl font-700 tracking-tight text-white leading-tight mb-3">
                      Men&apos;s Apparel
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {["T-Shirts", "Polos", "Sweatshirts", "Jackets"].map((item) => (
                        <span key={item} className="px-2.5 py-1 rounded-lg bg-white/12 text-[10px] font-500 text-white/70">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-600 text-white/60 group-hover:text-white group-hover:gap-2.5 transition-all duration-200">
                      Browse collection <ArrowRight size={12} weight="bold" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>

            {/* Women's */}
            <FadeIn delay={0.1} className="md:col-span-2">
              <Link href="/custom-apparel#womens" className="group block">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative overflow-hidden rounded-3xl bg-[#0f0f0f] min-h-[240px] flex flex-col justify-end p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.15)]"
                >
                  <Image
                    src="/images/home-bento-womens.jpg"
                    alt="Women's apparel collection"
                    fill
                    className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-xs font-500 tracking-widest uppercase text-white/50 mb-2">Women&apos;s</p>
                    <h3 className="text-2xl font-700 tracking-tight text-white leading-tight mb-3">
                      Women&apos;s Apparel
                    </h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {["T-Shirts", "Polos", "Dresses", "Jackets"].map((item) => (
                        <span key={item} className="px-2.5 py-1 rounded-lg bg-white/12 text-[10px] font-500 text-white/70">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-600 text-white/60 group-hover:text-white group-hover:gap-2.5 transition-all duration-200">
                      Browse collection <ArrowRight size={12} weight="bold" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>

            {/* Accessories */}
            <FadeIn delay={0.2} className="md:col-span-2">
              <Link href="/custom-accessories" className="group block">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative overflow-hidden rounded-3xl bg-[#1a0a10] min-h-[200px] flex flex-col justify-end p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.15)]"
                >
                  <Image
                    src="/images/home-bento-accessories.jpg"
                    alt="Custom accessories"
                    fill
                    className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_100%,rgba(185,28,58,0.2)_0%,transparent_70%)]" />
                  <div className="relative z-10">
                    <p className="text-xs font-500 tracking-widest uppercase text-white/50 mb-2">Accessories</p>
                    <h3 className="text-2xl font-700 tracking-tight text-white leading-tight">
                      Custom Accessories
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── WHY P3 ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 lg:px-10 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">Why P3</p>
              <h2 className="text-4xl md:text-5xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-6">
                Proven.<br />Reliable.<br />Solutions.
              </h2>
              <p className="text-base text-[#3a3a3c] leading-relaxed max-w-[52ch] mb-8">
                For over three decades, P3 has helped distributors deliver results. From branded
                uniforms to custom event apparel — we manufacture to spec, on time, every time.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-600 text-[#0f0f0f] hover:text-[#b91c3a] hover:gap-3 transition-all duration-200"
              >
                Our story <ArrowRight size={14} weight="bold" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-px">
                {[
                  { title: "Industry-grade manufacturing", desc: "In-house production with quality control at every step." },
                  { title: "Full-service decorating", desc: "Screen printing, embroidery, DTG, and dye sublimation under one roof." },
                  { title: "Distributor-first model", desc: "We work directly with the branded merchandise trade, no retail markup." },
                  { title: "Fast lead times", desc: "Streamlined production ensures your deadlines are met consistently." },
                  { title: "Valencia, CA based", desc: "Domestic manufacturing with direct account support." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, type: "spring", stiffness: 200, damping: 25 }}
                    className="flex items-start gap-4 py-5 border-b border-black/6 last:border-0"
                  >
                    <CheckCircle size={20} weight="fill" className="text-[#b91c3a] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-600 text-[#0f0f0f]">{item.title}</p>
                      <p className="text-sm text-[#3a3a3c] mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(185,28,58,0.12)_0%,transparent_70%)]" />
        <FadeIn>
          <div className="max-w-[1400px] mx-auto relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-800 tracking-tighter leading-none text-white mb-4">
              Ready to start<br />your next order?
            </h2>
            <p className="text-base text-white/50 leading-relaxed max-w-[44ch] mx-auto mb-8">
              Talk to our team about your project. We will handle the rest.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_rgba(185,28,58,0.35)]"
              >
                Get a Quote <ArrowRight size={15} weight="bold" />
              </Link>
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-600 text-white/70 bg-white/8 border border-white/12 rounded-xl hover:bg-white/14 active:scale-[0.98] transition-all duration-200"
              >
                How to Order
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
