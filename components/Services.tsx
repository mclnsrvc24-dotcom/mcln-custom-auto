import { Sparkles, Shield, Sun, Layers, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  tag?: string
}

const services: Service[] = [
  {
    icon: Sparkles,
    title: 'Auto Detailing',
    description:
      'Full interior and exterior detail. We restore every surface to showroom condition using professional-grade products and meticulous technique.',
    tag: 'Most Popular',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description:
      '9H hardness nano-ceramic protection that chemically bonds to your paint for years of hydrophobic, mirror-like gloss that repels dirt and grime.',
  },
  {
    icon: Sun,
    title: 'Window Tinting',
    description:
      'Premium ceramic window film that blocks up to 99% of UV rays, reduces interior heat, and gives your vehicle a clean, uniform appearance.',
  },
  {
    icon: Layers,
    title: 'Vinyl Wraps',
    description:
      "Full and partial wraps in any color or finish. Transform your vehicle's look while protecting the factory paint underneath.",
  },
  {
    icon: ShieldCheck,
    title: 'Paint Protection Film',
    description:
      'Self-healing urethane film absorbs rock chips, scratches, and road debris — keeping your paint flawless for years.',
    tag: 'Premium',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-red-500" />
            <span className="text-red-400 text-[10px] tracking-[0.5em] uppercase font-body font-medium">
              What We Offer
            </span>
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-5">
            Our Services
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed font-body">
            Every service is performed by certified professionals using only
            the finest materials on the market. No shortcuts. No compromises.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative bg-neutral-950 hover:bg-[#0f0f0f] p-10 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Hover left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                {/* Tag */}
                {service.tag && (
                  <span className="absolute top-6 right-6 text-[9px] tracking-[0.3em] uppercase bg-red-600/10 text-red-400 border border-red-600/20 px-2.5 py-1 font-body">
                    {service.tag}
                  </span>
                )}

                {/* Icon Box */}
                <div className="mb-7">
                  <div className="w-11 h-11 border border-white/10 group-hover:border-red-600/40 flex items-center justify-center transition-colors duration-300">
                    <Icon
                      size={18}
                      className="text-red-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-body">
                  {service.description}
                </p>

                {/* Learn More — visible on hover */}
                <div className="mt-6 flex items-center gap-2 text-red-500 text-[10px] tracking-[0.3em] uppercase font-body opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </div>
            )
          })}

          {/* Spacer card to fill grid */}
          <div className="hidden lg:block bg-neutral-950 p-10 relative">
            <div className="h-full flex flex-col justify-end">
              <p className="text-neutral-700 text-xs tracking-widest uppercase font-body mb-3">
                Don't see what you need?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white text-xs tracking-widest uppercase font-body hover:text-red-400 transition-colors duration-200"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
