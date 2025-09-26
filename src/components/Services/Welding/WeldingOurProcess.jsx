import React from 'react';

const WeldingOurProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "Evaluation of structural damage and fabrication requirements.",
    },
    {
      number: 2,
      title: "Design",
      description: "Custom design and planning of fabrication or repair work.",
    },
    {
      number: 3,
      title: "Fabrication",
      description: "Precision welding and metalwork using professional equipment.",
    },
    {
      number: 4,
      title: "Testing",
      description: "Quality inspection and structural integrity verification.",
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
            <div key={step.number} className="text-center space-y-4">
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

export default WeldingOurProcess;
