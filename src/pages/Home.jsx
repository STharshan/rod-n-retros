import React from 'react'
import Header from '../components/Home/Header'
import ServiceSection from '../components/Home/ServiceSection'
import ContactSection from '../components/Home/ContactSection'
import ReviewsSlider from '../components/Home/Testimonials'
import FindUs from '../components/Home/Findus'

const Home = () => {
  return (
    <div>
      <Header />
      <ServiceSection />
      <ReviewsSlider />
      <ContactSection />
      <FindUs />
    </div>
  )
}

export default Home