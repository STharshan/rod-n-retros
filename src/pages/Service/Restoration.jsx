import React from 'react'
import FullHeader from '../../components/Services/Restoration/RestorationHeader'
import RestorationWhatWeInclude from '../../components/Services/Restoration/RestorationWhatWeInclude'
import RestorationOurProcess from '../../components/Services/Restoration/RestorationOurProcess'
import RestorationRecentWork from '../../components/Services/Restoration/RestorationRecentWork'
import ReadyToGetStarted from '../../components/ReadyToGetStarted'

const Restoration= () => {
  return (
    <div>
      <FullHeader />
      <RestorationWhatWeInclude />
      <RestorationOurProcess />
      <RestorationRecentWork />
      <ReadyToGetStarted />
    </div>
  )
}

export default Restoration
