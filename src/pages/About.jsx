import React from 'react'
import AboutSection from '../components/About/AboutHeader'
import OurStory from '../components/About/OurStory'
import OurValues from '../components/About/OurValue'
import MeetOurTeam from '../components/About/MeetOurTeam'
import OurJourney from '../components/About/OurJourney'
import AboutCall from '../components/About/AboutCall'

const About = () => {
  return (
    <div>
      <AboutSection />
      <OurStory />
      <OurValues />
      <MeetOurTeam />
      <OurJourney />
      <AboutCall />
    </div>
  )
}

export default About
