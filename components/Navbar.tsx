'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="McLN Custom Auto"
            width={160}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-neutral-400 hover:text-white text-xs tracking-[0.2em] uppercase font-body transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="group flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-[0.2em] uppercase px-6 py-3 transition-all duration-200"
          >
            Book Now
            <ChevronRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 -mr-2"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-black/98 backdrop-blur-md border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-neutral-400 hover:text-white text-xs tracking-[0.2em] uppercase font-body py-3 border-b border-white/5 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-[0.2em] uppercase px-6 py-3.5 mt-4 transition-colors duration-200"
            >
              Book Now
              <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
