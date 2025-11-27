"use client";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use this if using react-router, otherwise remove

const cardData = [
  {
    beforeImageUrl: "/brae-3.jpeg",
    afterImageUrl: "/brae-1.jpeg",
    altText: "1967 Ford Mustang Fastback",
    category: "Complete bare metal respray",
  },
  {
    beforeImageUrl: "/respray-1.jpeg",
    afterImageUrl: "/respray-2.jpeg",
    altText: "1969 Chevrolet Camaro SS",
    category: "Complete outer body respray",
  },
  {
    beforeImageUrl: "/nut-and-bolt -1.jpeg",
    afterImageUrl: "/nut-and-bolt -2.jpeg",
    altText: "1970 Plymouth 'Cuda",
    category: "Full nut and bolt restoration/fiberglass bodykit professionally fitted and blended in/bare metal respray",
  },
  {
    beforeImageUrl: "/fiberglass4-2.jpeg",
    afterImageUrl: "/fiberglass4-1.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Full fiberglass bodykit professionally fitted and blended in/Full nut and bolt restoration/bare metal respray",
  },
  {
    beforeImageUrl: "/strip5-3.jpeg",
    afterImageUrl: "/strip5-1.jpeg",
    altText: "1963 Corvette Split Window",
    category: "Complete strip and colour change inside and out",
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
  },
  {
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
  const [selectedCard, setSelectedCard] = useState(null);

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedCard(null);
    };
    if (selectedCard) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCard]);

  const openModal = (card, index) => setSelectedCard({ ...card, index });
  const closeModal = () => setSelectedCard(null);

  const navigateModal = (direction) => {
    if (!selectedCard) return;
    const currentIndex = selectedCard.index;
    let newIndex;
    if (direction === "next") {
      newIndex = currentIndex === cardData.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? cardData.length - 1 : currentIndex - 1;
    }
    setSelectedCard({ ...cardData[newIndex], index: newIndex });
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50 dark:bg-black transition-colors">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              onClick={() => openModal(card, index)}
              className="group relative bg-white dark:bg-black rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 cursor-pointer transform hover:scale-105"
            >
              {/* Images */}
              <div className="relative flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 aspect-square relative overflow-hidden">
                  <img
                    src={card.beforeImageUrl}
                    alt={`Before - ${card.altText}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                    Before
                  </span>
                </div>
                <div className="w-full sm:w-1/2 aspect-square relative overflow-hidden">
                  <img
                    src={card.afterImageUrl}
                    alt={`After - ${card.altText}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                    After
                  </span>
                </div>
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/50 transform -translate-x-px"></div>
              </div>

              {/* Hover Category Badge */}
              {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 w-100 text-center transition-opacity duration-300">
                {card.link ? (
                  <Link
                    to={card.link}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-[#8b1a1a] text-white  py-1 rounded-full text-sm font-medium shadow-md hover:bg-[#a78b50] transition-colors"
                  >
                    {card.category}
                  </Link>
                ) : (
                  <span className="bg-[#8b1a1a] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    {card.category}
                  </span>
                )}
              </div> */}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl w-full max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl max-h-[90vh] overflow-auto shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Our Work Gallery
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedCard.index + 1} of {cardData.length}
                  </span>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 space-y-2">
                  <span className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Before
                  </span>
                  <div className="w-full aspect-video mt-5 rounded-lg overflow-hidden">
                    <img
                      src={selectedCard.beforeImageUrl}
                      alt={`Before - ${selectedCard.altText}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    After
                  </span>
                  <div className="w-full aspect-video mt-5 rounded-lg overflow-hidden">
                    <img
                      src={selectedCard.afterImageUrl}
                      alt={`After - ${selectedCard.altText}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="text-center px-4">
                <span className="inline-block bg-[#8b1a1a] text-white px-4 py-2 rounded-lg text-sm font-medium">
                  {selectedCard.category}
                </span>
              </div>

              {/* Navigation */}
              <button
                onClick={() => navigateModal("prev")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full shadow-lg transition-colors"
              >
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigateModal("next")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-full shadow-lg transition-colors"
              >
                <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkGallery;