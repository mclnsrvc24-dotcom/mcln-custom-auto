import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import ContactForm from './ContactForm'

interface ContactItem {
  icon: LucideIcon
  label: string
  value: string
}

const contactInfo: ContactItem[] = [
  {
    icon: MapPin,
    label: 'Location',
    value: '1234 Auto Drive, Dallas, TX 75201',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@mclncustomauto.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat: 8:00 AM – 6:00 PM',
  },
]

export default function BookingCTA() {
  return (
    <section id="contact" className="py-32 bg-neutral-950 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-600/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-10 h-px bg-red-500" />
            <span className="text-red-400 text-[10px] tracking-[0.5em] uppercase font-body font-medium">
              Get Started
            </span>
            <div className="w-10 h-px bg-red-500" />
          </div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-white uppercase leading-tight mb-5">
            Book Your{' '}
            <span className="text-red-500">Transformation</span>
          </h2>
          <p className="text-neutral-400 text-base font-body max-w-md mx-auto leading-relaxed">
            Ready to elevate your vehicle? Fill out the form and we&apos;ll reach
            out within 24 hours to confirm your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-base font-bold text-white uppercase tracking-widest mb-8">
              Contact Info
            </h3>
            <div className="space-y-7">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-red-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        size={15}
                        className="text-red-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <div className="text-neutral-600 text-[10px] tracking-[0.3em] uppercase font-body mb-1">
                        {item.label}
                      </div>
                      <div className="text-neutral-200 text-sm font-body">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Divider */}
            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <p className="text-neutral-600 text-xs font-body leading-relaxed">
                Walk-ins welcome based on availability. Appointments
                recommended for all services.
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
