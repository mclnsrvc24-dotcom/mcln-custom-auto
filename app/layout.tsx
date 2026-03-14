import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'McLN Custom Auto | Precision Detailing. Elite Finish.',
  description:
    'McLN Custom Auto offers luxury auto detailing, ceramic coating, window tinting, vinyl wraps, and paint protection film. Book your vehicle transformation today.',
  keywords: [
    'auto detailing',
    'ceramic coating',
    'window tinting',
    'vinyl wrap',
    'paint protection film',
    'PPF',
    'luxury car detailing',
    'custom automotive',
    'McLN Custom Auto',
  ],
  authors: [{ name: 'McLN Custom Auto' }],
  openGraph: {
    title: 'McLN Custom Auto | Precision Detailing. Elite Finish.',
    description:
      'Luxury detailing, wraps, and tinting for those who demand perfection.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'McLN Custom Auto | Precision Detailing. Elite Finish.',
    description:
      'Luxury detailing, wraps, and tinting for those who demand perfection.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rajdhani.variable}`}
    >
      <body className="font-body bg-neutral-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
