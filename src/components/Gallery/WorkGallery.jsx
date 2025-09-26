import React, { useState } from 'react';

const cardData = [
  {
    title: "1967 Ford Mustang Fastback",
    year: "1967",
    make: "Ford",
    model: "Mustang Fastback",
    description: "Complete frame-off restoration including engine rebuild, interior restoration, and bare metal respray.",
    category: "Full Restorations",
    imageUrl: "/g1.jpg",
    altText: "1967 Ford Mustang Fastback",
  },
  {
    title: "1969 Chevrolet Camaro SS",
    year: "1969",
    make: "Chevrolet",
    model: "Camaro SS",
    description: "Bare metal respray in original Rally Green with racing stripes.",
    category: "Bare Metal Resprays",
    imageUrl: "/g2.jpg",
    altText: "1969 Chevrolet Camaro SS",
  },
  {
    title: "1970 Plymouth 'Cuda",
    year: "1970",
    make: "Plymouth",
    model: "'Cuda",
    description: "Numbers matching 440 Six Pack restoration with original Plum Crazy Purple paint.",
    category: "Full Restorations",
    imageUrl: "/g3.jpg",
    altText: "1970 Plymouth 'Cuda",
  },
  {
    title: "1965 Shelby Cobra Replica",
    year: "1965",
    make: "Shelby",
    model: "Cobra Replica",
    description: "Fiberglass body repair and refinishing with custom paint scheme.",
    category: "Fiberglass Repairs",
    imageUrl: "/g4.jpg",
    altText: "1965 Shelby Cobra Replica",
  },
  {
    title: "1957 Chevrolet Bel Air",
    year: "1957",
    make: "Chevrolet",
    model: "Bel Air",
    description: "Extensive rust repair and structural welding with custom modifications.",
    category: "Welding & Fabrication",
    imageUrl: "/g5.jpg",
    altText: "1957 Chevrolet Bel Air",
  },
  {
    title: "1963 Corvette Split Window",
    year: "1963",
    make: "Chevrolet",
    model: "Corvette",
    description: "Paint correction and touch-up work maintaining original finish.",
    category: "Touch Ups",
    imageUrl: "/g6.jpg",
    altText: "1963 Corvette Split Window",
  },
];

const WorkGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle filter change
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter gallery items based on selected category
  const filteredCards = selectedCategory === "All" 
    ? cardData 
    : cardData.filter(card => card.category === selectedCategory);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Section */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Bare Metal Resprays", "Full Restorations", "Touch Ups", "Welding & Fabrication", "Fiberglass Repairs"].map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all px-3 py-2 rounded-md focus:outline-none ${
                selectedCategory === category
                  ? "bg-[#8b1a1a] text-white"
                  : "bg-gray-200 text-primary-foreground border border-gray-200 hover:bg-[#8b1a1a] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div data-slot="card-content" className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-balance">{card.title}</h3>
                    <span className="text-sm text-muted-foreground">{card.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{card.make}</span>
                    <span>•</span>
                    <span>{card.model}</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty leading-relaxed">
                    {card.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                      {card.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
