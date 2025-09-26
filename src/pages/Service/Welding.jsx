import React from 'react'
import ReadyToGetStarted from '../../components/ReadyToGetStarted'
import WeldingHeader from '../../components/Services/Welding/WeldingHeader'
import WeldingWhatWeInclude from '../../components/Services/Welding/WeldingWhatWeInclude'
import WeldingOurProcess from '../../components/Services/Welding/WeldingOurProcess'
import WeldingRecentWork from '../../components/Services/Welding/WeldingRecentWork'

const Welding = () => {
  return (
    <div>
      <WeldingHeader/>
      <WeldingWhatWeInclude />
      <WeldingOurProcess />
      <WeldingRecentWork />
      <ReadyToGetStarted />
    </div>
  )
}

export default Welding
