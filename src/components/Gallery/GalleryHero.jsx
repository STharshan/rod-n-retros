import React from 'react';

const GalleryHero = () => {
  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight mt-15">
            Our Work Gallery
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Explore our portfolio of classic car restorations, from complete frame-off builds to precision paint work. Each project represents our commitment to excellence and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
