import { Award, Wrench, Eye, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  stat: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Award,
    stat: '500+',
    title: 'Vehicles Completed',
    description:
      'Hundreds of satisfied clients who trusted us with their most prized possessions.',
  },
  {
    icon: Wrench,
    stat: '15+',
    title: 'Years of Expertise',
    description:
      'Over a decade of professional automotive aesthetics and surface protection experience.',
  },
  {
    icon: Eye,
    stat: '100%',
    title: 'Attention to Detail',
    description:
      'Every millimeter is inspected before your vehicle leaves our facility. Period.',
  },
  {
    icon: Trophy,
    stat: 'A+',
    title: 'Premium Brands Only',
    description:
      'We use XPEL, Llumar, STEK, Gyeon, and other industry-leading products exclusively.',
  },
]

export default function WhyUs() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-red-950/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-red-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-red-500" />
              <span className="text-red-400 text-[10px] tracking-[0.5em] uppercase font-body font-medium">
                The McLN Standard
              </span>
            </div>
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-6">
              Why Choose{' '}
              <span className="text-red-500">McLN?</span>
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed font-body mb-8">
              We don't just clean cars. We restore them to peak condition and
              protect that investment for years to come. Our shop is built on
              a foundation of precision, professionalism, and an unwavering
              passion for the craft.
            </p>
            <p className="text-neutral-400 text-base leading-relaxed font-body mb-10">
              Whether you drive a daily driver or an exotic, every vehicle
              receives the same elite-level treatment. That's the McLN
              promise.
            </p>

            {/* Quote */}
            <div className="flex items-start gap-4 pl-4 border-l-2 border-red-600">
              <p className="text-neutral-300 text-sm italic font-body leading-relaxed">
                "The difference between ordinary and extraordinary is that
                little extra — and we bring that to every single job."
              </p>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-black hover:bg-neutral-950 p-8 transition-colors duration-300 group"
                >
                  <Icon
                    size={22}
                    className="text-red-500 mb-5"
                    strokeWidth={1.5}
                  />
                  <div className="font-display text-4xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300">
                    {feature.stat}
                  </div>
                  <div className="font-display text-sm font-semibold text-white uppercase tracking-wide mb-2">
                    {feature.title}
                  </div>
                  <p className="text-neutral-600 text-xs leading-relaxed font-body">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
