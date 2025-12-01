import React from 'react'
import ContactSection from '../components/Home/ContactSection'
import FindUs from '../components/Home/Findus'
import HeroSection from '../components/Home/Header'
import HeroCurasol from '../components/Home/ServiceSection'
import Testimonials from '../components/Home/Testimonials'
import WhyChooseSection from '../components/Home/WhyChoose'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroCurasol />
      <WhyChooseSection />
      <Testimonials />
      <ContactSection />
      <FindUs />
    </div>
  )
}

export default Home