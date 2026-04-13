"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { List, X, CaretDown } from "@phosphor-icons/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Decorating",
    href: "/decorating",
    children: [
      { label: "Screen Printing", href: "/decorating#screen-printing" },
      { label: "Direct to Garment", href: "/decorating#dtg" },
      { label: "Dye Sublimation", href: "/decorating#dye-sublimation" },
      { label: "Embroidery", href: "/decorating#embroidery" },
    ],
  },
  {
    label: "Custom Apparel",
    href: "/custom-apparel",
    children: [
      { label: "Men's Apparel", href: "/custom-apparel#mens" },
      { label: "Women's Apparel", href: "/custom-apparel#womens" },
    ],
  },
  { label: "Custom Accessories", href: "/custom-accessories" },
  { label: "Order", href: "/order" },
  { label: "Contact", href: "/contact" },
];

function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const translateX = useTransform(x, [-50, 50], [-4, 4]);
  const translateY = useTransform(y, [-50, 50], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ translateX, translateY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-md border border-black/8 rounded-2xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] overflow-hidden"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04, type: "spring", stiffness: 400, damping: 30 }}
        >
          <Link
            href={item.href}
            className="block px-4 py-2.5 text-sm text-[#1c1c1e] hover:bg-[#b91c3a]/6 hover:text-[#b91c3a] transition-colors duration-150 font-medium"
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-black/6 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/p3logo.png"
              alt="P3 Inc."
              width={72}
              height={36}
              className={`h-9 w-auto object-contain transition-all duration-300 group-hover:opacity-70 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3.5 py-2 text-sm font-500 rounded-xl transition-all duration-200 ${
                    scrolled
                      ? pathname === link.href
                        ? "text-[#b91c3a] bg-[#b91c3a]/6"
                        : "text-[#1c1c1e] hover:text-[#b91c3a] hover:bg-[#b91c3a]/5"
                      : pathname === link.href
                        ? "text-white bg-white/12"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <motion.span
                      animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CaretDown size={12} weight="bold" />
                    </motion.span>
                  )}
                </Link>
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <DropdownMenu items={link.children} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] active:translate-y-px transition-all duration-200 shadow-[0_2px_8px_rgba(185,28,58,0.25)]"
              >
                Get a Quote
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled
                ? "text-[#1c1c1e] hover:bg-black/5"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-b border-black/8"
          >
            <nav className="px-6 py-4 space-y-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 400, damping: 30 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-500 rounded-xl transition-colors duration-150 ${
                      pathname === link.href
                        ? "text-[#b91c3a] bg-[#b91c3a]/8"
                        : "text-[#1c1c1e] hover:text-[#b91c3a] hover:bg-black/4"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-0.5 border-l border-black/8 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-xs font-500 text-[#3a3a3c] hover:text-[#b91c3a] transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-2 pb-1"
              >
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
