import React from 'react';

const RestorationOurProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Planning",
      description: "Detailed assessment and restoration plan development with timeline and budget.",
    },
    {
      number: 2,
      title: "Disassembly",
      description: "Careful documentation and removal of all components for individual restoration.",
    },
    {
      number: 3,
      title: "Restoration",
      description: "Comprehensive restoration of all mechanical, electrical, and cosmetic components.",
    },
    {
      number: 4,
      title: "Assembly",
      description: "Professional reassembly with final testing and quality assurance checks.",
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

export default RestorationOurProcess;
