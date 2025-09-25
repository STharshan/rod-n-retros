import React from 'react'
import GalleryHero from '../components/Gallery/GalleryHero'
import WorkFilters from '../components/Gallery/CallToAction'
import WorkGallery from '../components/Gallery/WorkGallery'
import CallToAction from '../components/Gallery/CallToAction'

const Gallery = () => {
  return (
    <div>
      <GalleryHero />
      <WorkGallery />
      <CallToAction />
    </div>
  )
}

export default Gallery
