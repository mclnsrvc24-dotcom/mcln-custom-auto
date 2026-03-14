import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import BookingCTA from '@/components/BookingCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  )
}
