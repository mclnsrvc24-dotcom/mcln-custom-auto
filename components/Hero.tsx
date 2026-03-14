import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1920&q=80"
          alt="McLN Custom Auto — luxury automotive detailing"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </div>

      {/* Left vertical red accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-red-600/70 to-transparent" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-px bg-red-500" />
            <span className="text-red-400 text-[10px] tracking-[0.5em] uppercase font-body font-medium">
              Premium Automotive Services
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display font-bold text-white uppercase leading-[0.88] tracking-tight mb-8">
            <span className="block text-[clamp(3rem,8vw,6rem)]">
              Precision
            </span>
            <span className="block text-[clamp(3rem,8vw,6rem)] text-gradient-red">
              Detailing.
            </span>
            <span className="block text-[clamp(2.5rem,7vw,5.5rem)] text-neutral-300 mt-1">
              Elite Finish.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg font-body">
            Luxury detailing, wraps, and tinting for those who demand
            perfection. Your vehicle deserves nothing less.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-white/25 hover:border-white/60 hover:bg-white/5 text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300"
            >
              View Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              { value: '500+', label: 'Vehicles' },
              { value: '15+', label: 'Years Exp.' },
              { value: '100%', label: 'Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-neutral-500 text-[10px] tracking-widest uppercase font-body mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-neutral-600 text-[10px] tracking-widest uppercase font-body">
          Scroll
        </span>
        <ChevronDown size={14} className="text-neutral-600" />
      </div>
    </section>
  )
}
