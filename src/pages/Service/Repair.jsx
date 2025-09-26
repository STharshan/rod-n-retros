import React from 'react'
import RepairHeader from '../../components/Services/Repair/RepairHeader'
import RepairWhatWeInclude from '../../components/Services/Repair/RepairWhatWeInclude'
import RepairOurProcess from '../../components/Services/Repair/RepairOurProcess'
import RepairRecentWork from '../../components/Services/Repair/RepairRecentWork'
import ReadyToGetStarted from '../../components/ReadyToGetStarted'


const Repair = () => {
  return (
    <div>
      <RepairHeader/>
      <RepairWhatWeInclude />
      <RepairOurProcess />
      <RepairRecentWork />
      <ReadyToGetStarted />
    </div>
  )
}

export default Repair
