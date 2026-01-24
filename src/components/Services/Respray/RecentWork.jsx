import React from 'react';

const RecentWork = () => {
  const images = [
    { src: '/brae-2.jpeg', alt: 'Bare Metal Resprays example 1' },
    { src: '/brae-3.jpeg', alt: 'Bare Metal Resprays example 2' },
    { src: '/brae-1.jpeg', alt: 'Bare Metal Resprays example 3' },
    { src: '/Full bare metal respray 24-1.jpeg', alt: 'Bare Metal Resprays example 4' },
    { src: '/Full bare metal respray 24-2.jpeg', alt: 'Bare Metal Resprays example 5' },
    { src: '/r5.jpg', alt: 'Bare Metal Resprays example 6' },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Recent Work</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Examples of our craftsmanship and attention to detail.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              <img
                src={image.src}
                loading="lazy"
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
