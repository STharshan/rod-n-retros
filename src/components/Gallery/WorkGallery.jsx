import React, { useState } from 'react';

const cardData = [
  {
    beforeImageUrl: "/a1.jpg",
    afterImageUrl: "/a3.jpg",
    altText: "1967 Ford Mustang Fastback",
    category: "Bare Metal Resprays",
  },
  {
    beforeImageUrl: "/c1.jpg",
    afterImageUrl: "/c3.jpg",
    altText: "1969 Chevrolet Camaro SS",
    category: "Full Restorations",
  },
  {
    beforeImageUrl: "/d1.jpg",
    afterImageUrl: "/d3.jpg",
    altText: "1970 Plymouth 'Cuda",
    category: "Full Restorations",
  },
  {
    beforeImageUrl: "/h1.jpg",
    afterImageUrl: "/h3.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/i1.jpg",
    afterImageUrl: "/i2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/j1.jpg",
    afterImageUrl: "/j2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/k1.jpg",
    afterImageUrl: "/k3.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/l1.jpg",
    afterImageUrl: "/l3.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/m1.jpg",
    afterImageUrl: "/m3.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/v1.jpg",
    afterImageUrl: "/v2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Welding & Fabrication",
  },
  {
    beforeImageUrl: "/e1.jpg",
    afterImageUrl: "/e2.jpg",
    altText: "1965 Shelby Cobra Replica",
    category: "Fiberglass Repairs",
  },
  {
    beforeImageUrl: "/n1.jpg",
    afterImageUrl: "/n2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/o1.jpg",
    afterImageUrl: "/o2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  }, {
    beforeImageUrl: "/p1.jpg",
    afterImageUrl: "/p2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/q1.jpg",
    afterImageUrl: "/q2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/s1.jpg",
    afterImageUrl: "/s2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/u1.jpg",
    afterImageUrl: "/u2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },

  {
    beforeImageUrl: "/w1.jpg",
    afterImageUrl: "/w2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/x1.jpg",
    afterImageUrl: "/x2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/y1.jpg",
    afterImageUrl: "/y2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },
  {
    beforeImageUrl: "/z1.jpg",
    afterImageUrl: "/z2.jpg",
    altText: "1963 Corvette Split Window",
    category: "Touch Ups & Smart Repairs",
  },

];

const WorkGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories from data
  const categories = ["All", ...Array.from(new Set(cardData.map(card => card.category)))];

  // Filter gallery items based on selected category
  const filteredCards = selectedCategory === "All"
    ? cardData
    : cardData.filter(card => card.category === selectedCategory);

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Work Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            See the amazing transformations of classic cars through our restoration process
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${selectedCategory === category
                  ? "bg-[#8b1a1a] text-white shadow-md"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:bg-[#8b1a1a] hover:text-white hover:border-[#8b1a1a]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Before/After Images Container */}
              <div className="relative overflow-hidden">
                {/* Before/After Labels */}
                <div className="absolute top-3 left-3 right-3 z-10 flex justify-between">
                  <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                    Before
                  </span>
                  <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                    After
                  </span>
                </div>

                {/* Images Grid */}
                <div className="flex">
                  {/* Before Image */}
                  <div className="w-1/2 relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <img
                        src={card.beforeImageUrl}
                        alt={`Before - ${card.altText}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    {/* Subtle overlay for before image */}
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>

                  {/* After Image */}
                  <div className="w-1/2 relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <img
                        src={card.afterImageUrl}
                        alt={`After - ${card.altText}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/50 transform -translate-x-px"></div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {/* {card.altText} */}
                  </h3>
                  <span className="inline-block bg-[#8b1a1a]/10 text-[#8b1a1a] dark:bg-[#fc8181]/10 dark:text-[#fc8181] px-2 py-1 rounded-md text-xs font-medium">
                    {/* {card.category} */}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">No projects found</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Try selecting a different category to see our work.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGallery;