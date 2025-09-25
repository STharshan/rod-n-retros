import React from 'react';

// Define the journey milestones as an array of objects
const journeyMilestones = [
  {
    year: 1999,
    description: 'Rods N Retros founded by Mike Rodriguez',
  },
  {
    year: 2005,
    description: 'Expanded to current 10,000 sq ft facility',
  },
  {
    year: 2010,
    description: 'Reached 250 completed restorations milestone',
  },
  {
    year: 2015,
    description: 'Added state-of-the-art paint booth and equipment',
  },
  {
    year: 2020,
    description: 'Celebrated 500+ completed projects',
  },
  {
    year: 2025,
    description: '25 years of restoration excellence',
  },
];

const OurJourney = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Journey</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Key milestones in our 25-year history of automotive restoration excellence.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-8">
          {journeyMilestones.map((milestone, index) => (
            <div key={index} className="flex items-center space-x-6">
              <div className="flex-shrink-0 w-20 text-right">
                <span className="text-2xl font-bold text-[#8b1a1a] ">{milestone.year}</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-[#8b1a1a]  rounded-full"></div>
              <div className="flex-1">
                <p className="text-lg text-foreground">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
