import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  vehicle: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Marcus T.',
    vehicle: '2023 BMW M4 Competition',
    rating: 5,
    text: 'McLN did a full ceramic coat on my M4 and the results are stunning. The paint looks deeper and more alive than the day I bought it. Professional from start to finish — these guys know their craft.',
  },
  {
    name: 'Jordan R.',
    vehicle: '2022 Porsche 911 GT3',
    rating: 5,
    text: "The XPEL PPF installation was flawless. You can't even tell it's there — and that's exactly the point. My GT3 is protected without compromising a single detail of the look. Worth every penny.",
  },
  {
    name: 'Stephanie L.',
    vehicle: '2024 Mercedes G-Wagon',
    rating: 5,
    text: 'Had a full vinyl wrap done in matte black and I cannot stop staring at my truck. The craftsmanship is on another level — every edge, every curve is perfect. McLN is the only shop I trust.',
  },
  {
    name: 'David K.',
    vehicle: '2023 Tesla Model S Plaid',
    rating: 5,
    text: 'Came in for window tint and ended up booking a full interior detail. Both came out absolutely perfect. The team is knowledgeable, detail-oriented, and genuinely passionate. Highly recommend.',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(220,38,38,0.04),transparent)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-px bg-red-500" />
            <span className="text-red-400 text-[10px] tracking-[0.5em] uppercase font-body font-medium">
              Client Reviews
            </span>
            <div className="w-10 h-px bg-red-500" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white uppercase leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-black hover:bg-neutral-950 p-10 transition-colors duration-300 group relative overflow-hidden"
            >
              {/* Large quote decoration */}
              <Quote
                size={40}
                className="text-red-600/15 mb-6"
                strokeWidth={1}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="text-red-500 fill-red-500"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-neutral-300 text-sm leading-relaxed font-body mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                <div className="w-10 h-10 bg-neutral-900 border border-white/10 flex items-center justify-center font-display font-bold text-white text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white uppercase tracking-wide">
                    {t.name}
                  </div>
                  <div className="text-neutral-500 text-xs font-body mt-0.5">
                    {t.vehicle}
                  </div>
                </div>
              </div>

              {/* Bottom accent line — appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
