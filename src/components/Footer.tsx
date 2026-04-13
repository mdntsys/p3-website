import Link from "next/link";
import Image from "next/image";
import { MapPin, Envelope, Phone, FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";

const footerLinks = {
  Services: [
    { label: "Screen Printing", href: "/decorating#screen-printing" },
    { label: "Direct to Garment", href: "/decorating#dtg" },
    { label: "Dye Sublimation", href: "/decorating#dye-sublimation" },
    { label: "Embroidery", href: "/decorating#embroidery" },
  ],
  Apparel: [
    { label: "Men's Apparel", href: "/custom-apparel#mens" },
    { label: "Women's Apparel", href: "/custom-apparel#womens" },
    { label: "Custom Accessories", href: "/custom-accessories" },
    { label: "Place an Order", href: "/order" },
  ],
  Company: [
    { label: "About P3", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms & Conditions", href: "/order#terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      {/* Top band */}
      <div className="border-b border-white/8 py-10 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Image
              src="/images/p3logo.png"
              alt="P3 Inc."
              width={80}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-3 text-sm text-white/40 max-w-xs leading-relaxed">
              Proven. Reliable. Solutions. Custom apparel and garment decorating since 1988.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-sm font-600 text-white bg-[#b91c3a] rounded-xl hover:bg-[#d42448] active:scale-[0.98] transition-all duration-200 shrink-0"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact info */}
        <div className="space-y-4">
          <h3 className="text-xs font-600 tracking-widest uppercase text-white/40">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-white/60">
              <MapPin size={15} weight="fill" className="text-[#b91c3a] mt-0.5 shrink-0" />
              <span className="leading-relaxed">
                29003 Avenue Sherman<br />Valencia, CA 91355
              </span>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/60">
              <Envelope size={15} weight="fill" className="text-[#b91c3a] shrink-0" />
              <a href="mailto:info@p3inc.com" className="hover:text-white transition-colors">
                info@p3inc.com
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/60">
              <Phone size={15} weight="fill" className="text-[#b91c3a] shrink-0" />
              <span>Mon–Fri: 8am – 5pm</span>
            </li>
          </ul>
          <p className="text-xs text-white/30 pt-1">ASI #75614</p>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xs font-600 tracking-widest uppercase text-white/40">{category}</h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 lg:px-10 py-5">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 order-2 sm:order-1">
            &copy; {new Date().getFullYear()} P3, Inc. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {[
              { Icon: FacebookLogo, href: "https://www.facebook.com/", label: "Facebook" },
              { Icon: InstagramLogo, href: "https://www.instagram.com/", label: "Instagram" },
              { Icon: LinkedinLogo, href: "https://www.linkedin.com/", label: "LinkedIn" },
              { Icon: TwitterLogo, href: "https://twitter.com/", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/8 transition-all duration-150 active:scale-[0.95]"
              >
                <Icon size={16} weight="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
