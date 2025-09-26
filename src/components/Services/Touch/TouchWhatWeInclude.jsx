import React from 'react';

const TouchWhatWeInclude = () => {
  const cardItems = [
    "Minor scratch and chip repair",
    "Paint color matching",
    "Spot painting and blending",
    "Clear coat restoration",
    "Bumper and trim repair",
    "Stone chip protection",
    "Paint correction and polishing",
    "Quick turnaround times",
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">What We Include</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our comprehensive approach ensures every detail is perfect.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardItems.map((item, index) => (
            <div
              key={index}
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-border/50"
            >
              <div data-slot="card-content" className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#8b1a1a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-card-foreground">{item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouchWhatWeInclude;