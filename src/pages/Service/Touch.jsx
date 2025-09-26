import React from 'react'
import ReadyToGetStarted from '../../components/ReadyToGetStarted'
import TouchHeader from '../../components/Services/Touch/TouchHeader'
import TouchWhatWeInclude from '../../components/Services/Touch/TouchWhatWeInclude'
import TouchOurProcess from '../../components/Services/Touch/TouchOurProcess'
import TouchRecentWork from '../../components/Services/Touch/TouchRecentWork'

const Touch = () => {
  return (
    <div>
      <TouchHeader />
      <TouchWhatWeInclude />
      <TouchOurProcess />
      <TouchRecentWork />
      <ReadyToGetStarted />
    </div>
  )
}

export default Touch
