"use client";

import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "Took our car in for a small blemish in the paintwork, after 18 months and the guarantee was fully honoured. True sign of great service and company.",
    name: "Christine Twigg",
  },
  {
    text: "After a run in with a concrete post I was in need of repairs. The work completed was amazing and my car now looks like new. Very reasonably priced, speedy service and fantastic work. Would highly recommend.",
    name: "Helen Duffy",
  },
  {
    text: "The guys did a perfect job. Puts the rest of the truck to shame. Quick turn around also. From enquiry to complete in just a few days. Highly recommended.",
    name: "Daniel Walker",
  },
  {
    text: " Booked me in for a few days later and finished the work on the same day. Great service and impressed with the work.",
    name: "Dave C",
  },
  {
    text: "Rods N Retros have done a fantastic job in repairing the back of my car. It looks brand new again!! Thank you guys.",
    name: "Holly Sheals",
  },
  {
    text: "Great, professional service from this garage. I had a minor job to do and nobody in Middleton wanted to take it on, or were giving me 4-6 weeks away date. It literally was 5 minutes job and these guys made it quick and as wanted.",
    name: "Andrzej Węgielnik",
  },
  {
    text: "Left 1 of my businesses vans with Rods N Retros after 1 of my employees reversed into a dump truck. Job was to replace re-door and replace twisted sections of the main van structure. Professional service and workmanship.",
    name: "Stephen Davison",
  },
    {
    text: "Absolutely lovely guys spot on",
    name: "Scott Evans",
  },
];


export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });

    // ✅ Center the first card after mount
    const timeout = setTimeout(() => {
      const container = scrollRef.current;
      if (container && container.children.length > 0) {
        const firstCard = container.children[0];
        const scrollPosition =
          firstCard.offsetLeft -
          (container.offsetWidth / 2 - firstCard.offsetWidth / 2);
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }, 300); // small delay ensures layout is ready

    return () => clearTimeout(timeout);
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      // Calculate scroll amount to move exactly 2 cards on tablet/desktop
      const card = current.children[0];
      const cardWidth = card ? card.offsetWidth : 0;
      const gap = 24; // space-x-6 = 1.5rem = 24px
      const scrollAmount = (cardWidth + gap) * 2;

      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-white  transition-colors duration-500 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-4xl lg:text-5xl font-bold text-balance text-center text-gray-400 uppercase tracking-wider">
            Our Testimonials
          </p>
          <h2 className="text-xl mt-5 mb-10 text-center font-bold leading-tight">
            What people say about our company
          </h2>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 mt-20 -translate-y-1/2 bg-[#8b1a1a] p-3 rounded-full shadow-md hover:bg-[#8b1a1a] hover:text-white transition z-20 group"
        >
          <FaChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 mt-20 -translate-y-1/2 bg-[#8b1a1a] p-3 rounded-full shadow-md hover:bg-[#8b1a1a] hover:text-white transition z-20 group"
        >
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 translate-x-6 md:translate-x-0 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 py-8 hide-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                flex-shrink-0
                w-[95%] sm:w-80 md:w-85 lg:w-85
                bg-zinc-900 
                rounded-2xl shadow-lg overflow-hidden 
                hover:shadow-[#8b1a1a] active:shadow-[#8b1a1a] 
                
                relative snap-start
              "
            >
              {/* Corner Triangle */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-t-[#8b1a1a] border-r-[80px] border-r-transparent"></div>

              {/* Profile Section */}
              <div className="relative pt-6 px-6 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed  p-1 bg-[#8b1a1a]">
                      <img
                        src="test.png"
                        alt={testimonial.name}
                        className="w-22 mt-3 h-10 mx-auto object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 bg-gray-100  py-3 px-4 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900 ">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600  text-sm">
                      Client
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300  text-sm sm:text-base leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}