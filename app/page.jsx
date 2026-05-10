import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Packages from '@/components/Packages'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import InstaBadge from '@/components/InstaBadge'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Packages />
        <Contact />
      </main>
      <Footer />
      <InstaBadge />
    </>
  )
}
