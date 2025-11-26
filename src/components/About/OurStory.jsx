import React from 'react';

const OurStory = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Story</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            From a small garage to a state-of-the-art restoration facility, our journey has been driven by passion for classic automobiles.
          </p>
        </div>

        {/* Main Content and Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Founded in 1999 by master craftsman Mike Rodriguez, Rods N Retros began as a dream to preserve automotive history. What started as weekend projects in a small garage has grown into one of the region's most respected restoration shops.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Our team combines decades of experience with cutting-edge technology to deliver restorations that exceed expectations. We've had the privilege of working on everything from barn finds to concours-level show cars, each project receiving the same meticulous attention to detail.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Today, we operate from a 10,000 square foot facility equipped with the latest tools and technology, but our commitment to traditional craftsmanship and personal service remains unchanged.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "500+", label: "Cars Restored" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "10k", label: "Sq Ft Facility" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-xl shadow-md hover:shadow-[0_0_25px_rgba(139,26,26,0.7)] transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-[#8b1a1a] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
