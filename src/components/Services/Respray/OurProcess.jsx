import React from 'react';

const OurProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "Thorough evaluation of current paint condition and surface preparation needs.",
    },
    {
      number: 2,
      title: "Stripping",
      description: "Complete removal of existing paint, primer, and rust using professional techniques.",
    },
    {
      number: 3,
      title: "Preparation",
      description: "Surface smoothing, filling, and priming to create the perfect foundation.",
    },
    {
      number: 4,
      title: "Painting",
      description: "Professional spray application with multiple coats and final clear coat protection.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Process</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Step-by-step approach to delivering exceptional results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="text-center space-y-4 p-6 rounded-xl border border-transparent shadow-md
                         transition-all duration-300 ease-out cursor-pointer
                         hover:border-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]
                         active:border-[#ff0000] active:shadow-[0_0_20px_rgba(255,0,0,0.6)]"
            >
              <div className="w-12 h-12 bg-[#8b1a1a] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-pretty">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
