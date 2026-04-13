"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Envelope, Clock, ArrowRight, CheckCircle, Warning } from "@phosphor-icons/react";

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

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
}: {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-xs font-600 text-[#1c1c1e]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0f0f0f] bg-white placeholder-[#9a9a9e] outline-none transition-all duration-150 focus:ring-2 focus:ring-[#b91c3a]/20 focus:border-[#b91c3a] ${
          error ? "border-red-400 bg-red-50" : "border-black/12 hover:border-black/20"
        }`}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-xs text-red-500 font-500"
          >
            <Warning size={12} weight="fill" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormState>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please describe your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(185,28,58,0.1)_0%,transparent_70%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <p className="text-xs font-600 tracking-widest uppercase text-[#b91c3a] mb-4">Contact</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-800 tracking-tighter leading-none text-white max-w-3xl">
              Let&apos;s build<br />something together.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_400px] gap-16 items-start">
          {/* Form */}
          <FadeIn>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="flex flex-col items-start gap-4 py-16"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#b91c3a]/10 flex items-center justify-center">
                    <CheckCircle size={28} weight="fill" className="text-[#b91c3a]" />
                  </div>
                  <h2 className="text-3xl font-800 tracking-tighter text-[#0f0f0f]">Message received.</h2>
                  <p className="text-sm text-[#3a3a3c] leading-relaxed max-w-[44ch]">
                    Thank you for reaching out. Our team will review your inquiry and get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Your name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Alex Rivera"
                    />
                    <InputField
                      label="Email address"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="alex@company.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Company (optional)"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-xs font-600 text-[#1c1c1e]">
                        Service interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-black/12 text-sm text-[#0f0f0f] bg-white outline-none transition-all duration-150 focus:ring-2 focus:ring-[#b91c3a]/20 focus:border-[#b91c3a] hover:border-black/20 appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="screen-printing">Screen Printing</option>
                        <option value="dtg">Direct to Garment</option>
                        <option value="dye-sublimation">Dye Sublimation</option>
                        <option value="embroidery">Embroidery</option>
                        <option value="apparel">Custom Apparel</option>
                        <option value="accessories">Custom Accessories</option>
                        <option value="other">Other / Not sure</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-600 text-[#1c1c1e]">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project — quantity, styles, timeline, and any artwork details you have."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0f0f0f] bg-white placeholder-[#9a9a9e] outline-none transition-all duration-150 focus:ring-2 focus:ring-[#b91c3a]/20 focus:border-[#b91c3a] resize-none ${
                        errors.message ? "border-red-400 bg-red-50" : "border-black/12 hover:border-black/20"
                      }`}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="flex items-center gap-1.5 text-xs text-red-500 font-500"
                        >
                          <Warning size={12} weight="fill" />
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileTap={{ scale: 0.98, translateY: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_4px_16px_rgba(185,28,58,0.25)]"
                  >
                    {status === "loading" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message <ArrowRight size={15} weight="bold" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn delay={0.15}>
            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/6">
                <p className="text-xs font-600 tracking-widest uppercase text-[#3a3a3c] mb-4">Location</p>
                <div className="flex items-start gap-3">
                  <MapPin size={16} weight="fill" className="text-[#b91c3a] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-600 text-[#0f0f0f]">P3, Inc.</p>
                    <p className="text-sm text-[#3a3a3c] mt-0.5">29003 Avenue Sherman</p>
                    <p className="text-sm text-[#3a3a3c]">Valencia, CA 91355</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/6">
                <p className="text-xs font-600 tracking-widest uppercase text-[#3a3a3c] mb-4">Email</p>
                <div className="flex items-center gap-3">
                  <Envelope size={16} weight="fill" className="text-[#b91c3a] shrink-0" />
                  <a href="mailto:info@p3inc.com" className="text-sm font-500 text-[#0f0f0f] hover:text-[#b91c3a] transition-colors">
                    info@p3inc.com
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#fafafa] border border-black/6">
                <p className="text-xs font-600 tracking-widest uppercase text-[#3a3a3c] mb-4">Hours</p>
                <div className="flex items-start gap-3">
                  <Clock size={16} weight="fill" className="text-[#b91c3a] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-600 text-[#0f0f0f]">Monday – Friday</p>
                    <p className="text-sm text-[#3a3a3c] mt-0.5">8:00 am – 5:00 pm PST</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#b91c3a]/6 border border-[#b91c3a]/12">
                <p className="text-xs font-600 text-[#b91c3a] mb-1">ASI Member</p>
                <p className="text-sm font-700 text-[#0f0f0f]">#75614</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
