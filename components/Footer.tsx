import Link from 'next/link'
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

const serviceLinks = [
  'Auto Detailing',
  'Ceramic Coating',
  'Window Tinting',
  'Vinyl Wraps',
  'Paint Protection Film',
]

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'X / Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-baseline gap-1 mb-5">
              <span className="font-display text-3xl font-bold text-white tracking-wider">
                Mc<span className="text-red-500">LN</span>
              </span>
            </Link>
            <p className="text-[10px] text-neutral-600 tracking-[0.35em] uppercase font-body mb-5">
              Custom Auto
            </p>
            <p className="text-neutral-500 text-sm leading-relaxed font-body max-w-xs mb-8">
              Luxury automotive detailing, ceramic coating, and custom
              aesthetics for discerning vehicle owners. Precision in every
              detail.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 border border-white/10 hover:border-red-600/50 flex items-center justify-center text-neutral-600 hover:text-red-400 transition-all duration-200"
                  >
                    <Icon size={14} />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-[0.25em] mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-neutral-500 hover:text-white text-sm font-body transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-xs font-bold text-white uppercase tracking-[0.25em] mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-neutral-500 hover:text-white text-sm font-body transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact quick links */}
            <div className="mt-8 pt-8 border-t border-white/[0.06]">
              <a
                href="tel:+15551234567"
                className="text-neutral-500 hover:text-white text-sm font-body transition-colors duration-200 block mb-2"
              >
                (555) 123-4567
              </a>
              <a
                href="mailto:info@mclncustomauto.com"
                className="text-neutral-500 hover:text-white text-sm font-body transition-colors duration-200 block"
              >
                info@mclncustomauto.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-700 text-xs font-body tracking-wide">
            © {year} McLN Custom Auto. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-neutral-700 hover:text-neutral-400 text-xs font-body transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-neutral-700 hover:text-neutral-400 text-xs font-body transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
