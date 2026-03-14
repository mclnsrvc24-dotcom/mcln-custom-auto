'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const serviceOptions = [
  'Auto Detailing',
  'Ceramic Coating',
  'Window Tinting',
  'Vinyl Wrap',
  'Paint Protection Film (PPF)',
  'Multiple Services',
]

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  vehicle: string
  message: string
}

const inputClass =
  'w-full bg-white/[0.04] border border-white/10 focus:border-red-600/70 focus:bg-white/[0.06] text-white placeholder-neutral-600 px-4 py-3 text-sm font-body outline-none transition-all duration-200'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Connect to a backend service (e.g. Resend, Formspree, or your own API route)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 border border-red-600/30 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-red-500" strokeWidth={1.5} />
        </div>
        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-3">
          Request Received
        </h3>
        <p className="text-neutral-400 text-sm font-body max-w-sm leading-relaxed">
          Thank you! We&apos;ll reach out within 24 hours to confirm your
          appointment details.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-body">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="John Smith"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-body">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-body">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div className="flex flex-col gap-2">
        <label className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-body">
          Service Requested <span className="text-red-500">*</span>
        </label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className={`${inputClass} bg-neutral-950`}
        >
          <option value="" disabled className="bg-neutral-950 text-neutral-500">
            Select a service
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-neutral-950 text-white">
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Vehicle */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-body">
          Vehicle (Year, Make, Model)
        </label>
        <input
          type="text"
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
          placeholder="e.g. 2023 BMW M4 Competition"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase font-body">
          Additional Notes
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your project, timeline, or any specific requests..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="md:col-span-2 pt-1">
        <button
          type="submit"
          className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
        >
          Send Request
          <Send
            size={13}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
        <p className="text-neutral-600 text-[10px] font-body mt-4">
          We respond within 24 hours. Your information is never shared.
        </p>
      </div>
    </form>
  )
}
