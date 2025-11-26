"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiStar } from "react-icons/fi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";

const testimonials = [
  {
    text: "Absolutely lovely guys spot on",
    name: "Scott Evans",
  },
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
];

function InitialAvatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-12 h-12 min-w-[3rem] rounded-full flex items-center justify-center font-semibold text-base"
      style={{
        backgroundColor: "#ffd700", // gold
        border: `1px solid #8b0000`, // dark red
        color: "#8b0000", // dark red initials
      }}
    >
      {initials}
    </div>
  );
}

export default function ReviewsSlider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      className="w-full bg-white dark:bg-black text-[#1f2937] dark:text-white py-16 px-4 relative transition-colors"
      id="testimonial"
    >
      <style jsx>{`
        /* Swiper pagination bullets */
        .swiper-pagination-bullet {
          background-color: transparent;
          border: 2px solid #ffd700; /* golden border */
          width: 10px;
          height: 10px;
          opacity: 1;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #ffd700; /* golden active */
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 text-black dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg font-semibold">
            Don’t just take our word for it – hear from our satisfied customers
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Pagination]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".swiper-button-prev-custom";
              swiper.params.navigation.nextEl = ".swiper-button-next-custom";
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-20"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="flex">
                <article
                  className="flex flex-col justify-between h-full w-full min-h-[320px] rounded-2xl border p-6 shadow-md 
                             transition-all hover:shadow-lg hover:-translate-y-1 active:scale-[0.98] cursor-pointer
                             bg-[#8b0000] border-[#b22222] group relative"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-[#ffd700]/20 via-transparent to-transparent" />

                  <div>
                    <div className="flex items-center gap-3">
                      <InitialAvatar name={t.name} />
                      <div className="flex-1">
                        <div className="flex items-center gap-1 text-[#ffd700]">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FiStar key={i} className="w-4 h-4 fill-[#ffd700]" />
                          ))}
                        </div>
                        <div className="mt-1 text-xs text-[#ffd700]">
                          Verified review
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm md:text-base text-[#ffd700] leading-relaxed">
                      “{t.text}”
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="font-semibold" style={{ color: "#ffd700" }}>
                      {t.name}
                    </div>
                    <div
                      className="flex items-center gap-1 px-2 py-1 rounded-full border text-sm"
                      style={{
                        borderColor: "#ffd70099",
                        color: "#ffd700",
                      }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar key={i} className="w-3.5 h-3.5 fill-[#ffd700]" />
                      ))}
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-0 
                       -translate-x-4 sm:-translate-x-8 md:-translate-x-12 
                       w-10 h-10 flex items-center justify-center rounded-full border border-[#ffd700]
                       text-[#ffd700] bg-[#8b0000]/20 backdrop-blur-sm hover:bg-[#ffd700] hover:text-[#8b0000]
                       active:scale-95 transition-all shadow-md z-30"
          >
            <BsArrowLeft className="w-5 h-5" />
          </button>

          <button
            className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-0 
                       translate-x-4 sm:translate-x-8 md:translate-x-12 
                       w-10 h-10 flex items-center justify-center rounded-full border border-[#ffd700]
                       text-[#ffd700] bg-[#8b0000]/20 backdrop-blur-sm hover:bg-[#ffd700] hover:text-[#8b0000]
                       active:scale-95 transition-all shadow-md z-30"
          >
            <BsArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-2" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://www.google.com/search?sca_esv=1543fb6b43c5b04c&rlz=1C5CHFA_enCA1132CA1132&sxsrf=AE3TifNAGCq-gSVZnVezscnsNKVnD8a3vw:1762328627645&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4snfBRxoD5VA9WINOudYTdIuXxOtThT3lNqgfKM-3NYIioq-Tqs17Vgumvijedpuqw-iK9h4aFzCFu9UStSdLdL5YOK&q=Rods+n+Retros+Reviews&sa=X&ved=2ahUKEwiz-s_ewdqQAxVqy6ACHZINOWMQ0bkNegQIIhAD&biw=1366&bih=633&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md text-white text-sm font-semibold transition
                       bg-[#8b1a1a] hover:opacity-90 active:scale-95"
          >
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
