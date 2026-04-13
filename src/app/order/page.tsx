"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, ChatCircle, Hammer, Package, NumberCircleOne, NumberCircleTwo, NumberCircleThree, NumberCircleFour, NumberCircleFive } from "@phosphor-icons/react";

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

const steps = [
  {
    num: NumberCircleOne,
    icon: ChatCircle,
    title: "Reach out",
    desc: "Contact us via email or the form on our contact page. Share your project details — quantities, styles, decoration type, and target delivery date.",
  },
  {
    num: NumberCircleTwo,
    icon: FileText,
    title: "Art review & quote",
    desc: "We review your artwork and issue a detailed quote. If your art needs preparation, we will advise on changes before production begins.",
  },
  {
    num: NumberCircleThree,
    icon: FileText,
    title: "Approve your proof",
    desc: "A digital proof is provided for your sign-off. Production begins only after written approval is received.",
  },
  {
    num: NumberCircleFour,
    icon: Hammer,
    title: "In production",
    desc: "Your order enters our in-house production queue. We manage decoration, quality checks, and folding or tagging per your spec.",
  },
  {
    num: NumberCircleFive,
    icon: Package,
    title: "Packaged and shipped",
    desc: "Finished goods are packed and shipped to your destination. Tracking is provided. Drop-ship options are available.",
  },
];

const termsItems = [
  {
    title: "Payment terms",
    body: "New accounts require payment in full prior to production. Established accounts may be eligible for net-30 terms upon credit approval. All prices are quoted in USD.",
  },
  {
    title: "Order minimums",
    body: "Screen printing requires a minimum of 24 pieces per design. Direct to Garment has no minimum. Embroidery minimum is 12 pieces. Dye sublimation minimums vary by product.",
  },
  {
    title: "Artwork requirements",
    body: "Vector files (AI, EPS, PDF) are preferred for screen printing and embroidery. High-resolution raster files (300 dpi minimum) are accepted for DTG. PMS color matching is available for screen printing.",
  },
  {
    title: "Production times",
    body: "Standard production is 10–14 business days after art approval. Rush production is available for an additional fee. P3 is not responsible for delays caused by late art approvals or customer-supplied goods.",
  },
  {
    title: "Returns & claims",
    body: "Claims for defective merchandise must be submitted within 14 business days of delivery. P3 will reprint or credit at our discretion. We do not accept returns on correctly printed orders.",
  },
  {
    title: "Overruns & underruns",
    body: "Industry standard allows for a ±5% variance on quantities. P3 will invoice for actual quantities shipped. Exact counts can be arranged for an additional charge.",
  },
  {
    title: "Customer-supplied goods",
    body: "P3 accepts customer-supplied blanks. A handling fee applies. P3 is not responsible for manufacturer defects in customer-supplied goods. Spoilage allowance of 3% applies.",
  },
  {
    title: "Shipping",
    body: "Shipping costs are calculated and added to the invoice. Orders are shipped UPS, FedEx, or common carrier depending on size. FOB Valencia, CA unless otherwise arranged.",
  },
];

export default function OrderPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_50%_0%,rgba(185,28,58,0.1)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">Ordering</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-800 tracking-tighter leading-none text-white max-w-3xl">
              How it works.
            </h1>
            <p className="mt-5 text-base text-white/50 leading-relaxed max-w-[52ch]">
              Placing an order with P3 is straightforward. Here is what to expect from first contact to delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-3">Process</p>
            <h2 className="text-4xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-14">
              From inquiry to delivery.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`p-6 rounded-2xl border border-black/8 bg-[#fafafa] h-full ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-800 tabular-nums font-mono text-[#b91c3a] leading-none">{String(i + 1).padStart(2, "0")}</span>
                      <div className="w-8 h-8 rounded-lg bg-[#b91c3a]/8 flex items-center justify-center">
                        <Icon size={15} weight="fill" className="text-[#b91c3a]" />
                      </div>
                    </div>
                    <h3 className="text-base font-700 text-[#0f0f0f] tracking-tight mb-2">{step.title}</h3>
                    <p className="text-sm text-[#3a3a3c] leading-relaxed">{step.desc}</p>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200"
              >
                Start your order <ArrowRight size={15} weight="bold" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" className="py-24 px-6 lg:px-10 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-3">Legal</p>
            <h2 className="text-4xl font-800 tracking-tighter leading-none text-[#0f0f0f] mb-4">
              Terms and conditions.
            </h2>
            <p className="text-sm text-[#3a3a3c] leading-relaxed max-w-[56ch] mb-12">
              By placing an order with P3, Inc., you agree to the following terms. Questions about any item below can be directed to our team.
            </p>
          </FadeIn>

          <div className="space-y-px">
            {termsItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="py-6 border-b border-black/6 last:border-0 grid md:grid-cols-[280px_1fr] gap-4 md:gap-10"
              >
                <h3 className="text-sm font-700 text-[#0f0f0f] tracking-tight">{item.title}</h3>
                <p className="text-sm text-[#3a3a3c] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-10 bg-white border-t border-black/6">
        <FadeIn>
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-base font-600 text-[#0f0f0f]">Questions about terms?</p>
              <p className="text-sm text-[#3a3a3c]">Contact us directly and we will clarify anything you need.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-600 text-[#b91c3a] bg-[#b91c3a]/8 rounded-xl hover:bg-[#b91c3a]/14 active:scale-[0.98] transition-all duration-200 shrink-0"
            >
              Contact us <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
