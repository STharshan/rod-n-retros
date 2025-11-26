import React from 'react'
import ContactSection from '../components/Home/ContactSection'
import ReviewsSlider from '../components/Home/Testimonials'
import FindUs from '../components/Home/Findus'
import HeroSection from '../components/Home/Header'
import HeroCurasol from '../components/Home/ServiceSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroCurasol />
      <ReviewsSlider />
      <ContactSection />
      <FindUs />
    </div>
  )
}

export default Home