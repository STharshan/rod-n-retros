import React from 'react';
import { Award, Shield, Users, Clock } from 'lucide-react'; // Import Lucide icons

const values = [
  {
    title: "Excellence",
    description: "We strive for perfection in every project, no matter the size or scope.",
    icon: <Award className="w-8 h-8 text-[#8b1a1a] dark:text-white" />,
  },
  {
    title: "Integrity",
    description: "Honest communication, transparent pricing, and reliable service.",
    icon: <Shield className="w-8 h-8 text-[#8b1a1a] dark:text-white" />,
  },
  {
    title: "Craftsmanship",
    description: "Traditional techniques combined with modern technology and tools.",
    icon: <Users className="w-8 h-8 text-[#8b1a1a] dark:text-white" />,
  },
  {
    title: "Dedication",
    description: "Committed to delivering projects on time and within budget.",
    icon: <Clock className="w-8 h-8 text-[#8b1a1a] dark:text-white" />,
  },
];

const OurValues = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Values</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            The principles that guide every restoration project and client relationship.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center border-border/50 hover:shadow-lg transition-shadow"
            >
              <div data-slot="card-content" className="p-8">
                <div className="w-16 h-16 bg-[#8b1a1a]/10 dark:bg-[#8b1a1a] rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-pretty">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
