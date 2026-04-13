"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Envelope, Clock, Certificate } from "@phosphor-icons/react";

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

const milestones = [
  { year: "1988", title: "Founded in Valencia, CA", desc: "P3 opens its doors as a specialty garment decorating house." },
  { year: "1997", title: "Expanded manufacturing floor", desc: "Added in-house embroidery and dye sublimation capabilities." },
  { year: "2005", title: "ASI Membership", desc: "Joined the Advertising Specialty Institute — ASI #75614." },
  { year: "2012", title: "Direct to Garment launch", desc: "Adopted digital DTG printing for small-run, full-color jobs." },
  { year: "2024", title: "36 years and counting", desc: "Continuing to serve distributors nationwide with the same precision." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_100%_50%,rgba(185,28,58,0.1)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">Company</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-800 tracking-tighter leading-none text-white max-w-3xl">
              The people behind the product.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main story */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">About P3</p>
            <h2 className="text-4xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-6">
              Proven. Reliable. Solutions.
            </h2>
            <div className="space-y-4 text-base text-[#3a3a3c] leading-relaxed max-w-[58ch]">
              <p>
                For 36 years, the P3 team has been a leader in designing and manufacturing custom
                apparel and accessories for the branded merchandise industry.
              </p>
              <p>
                We have spent decades helping distributors achieve results for their clients across
                every business sector — from Fortune 500 uniforms to boutique event apparel. Our
                full-service model means your project moves from concept to finished product without
                losing quality at any stage.
              </p>
              <p>
                Based in Valencia, CA, our facility houses screen printing, direct to garment,
                dye sublimation, and embroidery operations under a single roof. This integration
                gives us tight control over timelines, output quality, and communication.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200"
              >
                Get in touch <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.2)]">
                <Image
                  src="/images/about-facility.jpg"
                  alt="P3 manufacturing facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating tag */}
              <div className="absolute -bottom-4 -left-4 bg-[#b91c3a] text-white rounded-2xl p-4 shadow-[0_8px_24px_rgba(185,28,58,0.3)]">
                <p className="text-2xl font-800 tracking-tighter leading-none">36</p>
                <p className="text-xs font-500 text-white/80 mt-0.5">Years</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 lg:px-10 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-3">History</p>
            <h2 className="text-4xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-14">
              Three decades of craft.
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-black/8" />

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 25 }}
                  className="flex flex-col md:flex-row gap-4 md:gap-12 py-7 border-b border-black/6 last:border-0"
                >
                  <div className="md:w-[120px] shrink-0 flex md:flex-col md:items-end items-center gap-3 md:gap-0">
                    <span className="text-sm font-700 text-[#b91c3a] font-mono tabular-nums">{m.year}</span>
                    <div className="hidden md:block w-3 h-3 rounded-full bg-[#b91c3a] translate-x-[6px] mt-2 shadow-[0_0_0_4px_rgba(185,28,58,0.12)]" />
                  </div>
                  <div className="flex-1 md:pl-8">
                    <h3 className="text-base font-700 text-[#0f0f0f] tracking-tight mb-1">{m.title}</h3>
                    <p className="text-sm text-[#3a3a3c] leading-relaxed max-w-[52ch]">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-3">Get in Touch</p>
            <h2 className="text-4xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-12">
              We are here to help.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, label: "Address", value: "29003 Avenue Sherman\nValencia, CA 91355", href: "https://maps.google.com" },
              { icon: Envelope, label: "Email", value: "info@p3inc.com", href: "mailto:info@p3inc.com" },
              { icon: Clock, label: "Hours", value: "Mon–Fri\n8am – 5pm PST", href: null },
              { icon: Certificate, label: "Membership", value: "ASI Member\n#75614", href: null },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.label} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/6">
                    <div className="w-10 h-10 rounded-xl bg-[#b91c3a]/8 flex items-center justify-center mb-4">
                      <Icon size={18} weight="fill" className="text-[#b91c3a]" />
                    </div>
                    <p className="text-xs font-600 tracking-widest uppercase text-[#3a3a3c] mb-2">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-500 text-[#0f0f0f] hover:text-[#b91c3a] transition-colors whitespace-pre-line leading-relaxed">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-500 text-[#0f0f0f] whitespace-pre-line leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
