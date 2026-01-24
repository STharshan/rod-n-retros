import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroCurasol = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const scrollContainerRef = useRef(null);
    const navigate = useNavigate();

    const projects = [
        {
            id: "1",
            title: "Bare Metal Resprays",
            snippet:
                "Complete paint removal and professional respray services for a flawless finish.",
            beforeImage: "/brae-3.jpeg",
            afterImage: "/brae-1.jpeg",
            link: "/services/bare-metal-resprays",
            category: "Respray",
        },
        {
            id: "2",
            title: "Full Restorations",
            snippet:
                "Comprehensive restoration services bringing classic cars back to their former glory.",
            beforeImage: "/c1.jpg",
            afterImage: "/c3.jpg",
            link: "/services/full-restorations",
            category: "Restoration",
        },
        {
            id: "3",
            title: "Touch Ups & Smart Repairs",
            snippet:
                "Professional minor repair services to keep your vehicle looking pristine.",
            beforeImage: "/w1.jpg",
            afterImage: "/w2.jpg",
            link: "/services/touch-ups",
            category: "Touch Ups & Smart Repairs",
        },
        {
            id: "4",
            title: "Interior Dash Vinyl Wrap",
            snippet:
                "Expert metalwork and fabrication services for structural repairs and modifications.",
            beforeImage: "/f5.jpg",
            afterImage: "/g2.jpg",
            link: "/services/welding-fabrication",
            category: "Interior Dash Vinyl Wrap",
        },
        {
            id: "5",
            title: "Fiberglass Repairs",
            snippet:
                "Specialized fiberglass repair and restoration for classic and modern vehicles.",
            beforeImage: "/z1.jpg",
            afterImage: "/z2.jpg",
            link: "/services/fiberglass-repairs",
            category: "Fiberglass Repairs",
        },
    ];

    const displayOrder = [1, 2, 3, 4, 0];

    const scrollToCard = (index) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const containerWidth = container.offsetWidth;
        const cardElements = container.querySelectorAll(".project-card");
        const targetCard = cardElements[index];

        if (targetCard) {
            const cardWidth = targetCard.offsetWidth;
            const scrollPosition =
                targetCard.offsetLeft - containerWidth / 2 + cardWidth / 2;
            container.scrollTo({ left: scrollPosition, behavior: "smooth" });
        }

        setActiveIndex(index);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const containerWidth = container.offsetWidth;
            const scrollLeft = container.scrollLeft;
            const centerPosition = scrollLeft + containerWidth / 2;

            const cardElements = container.querySelectorAll(".project-card");
            let closestIndex = 0;
            let minDistance = Infinity;

            cardElements.forEach((card, index) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const distance = Math.abs(centerPosition - cardCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveIndex(closestIndex);
        };

        container.addEventListener("scroll", handleScroll);

        setTimeout(() => scrollToCard(displayOrder[0]), 300);

        const initialDelay = setTimeout(() => {
            let orderIndex = 0;
            const autoScroll = setInterval(() => {
                const nextIndex = displayOrder[orderIndex];
                scrollToCard(nextIndex);
                orderIndex = (orderIndex + 1) % displayOrder.length;
            }, 4000);

            container.autoScrollInterval = autoScroll;
        }, 4000);

        return () => {
            container.removeEventListener("scroll", handleScroll);
            clearTimeout(initialDelay);
            if (container.autoScrollInterval)
                clearInterval(container.autoScrollInterval);
        };
    }, []);

    return (
        <div
            id="about"
            className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-m-10"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto p-6">
                {/* Header Section */}
                <div data-aos="fade-down">
                    <p className=" text-4xl lg:text-5xl font-bold text-balance text-center text-gray-400 uppercase tracking-wider">
                        Our Restoration Services
                    </p>
                    <h1 className="text-xl mt-5 mb-10 max-w-2xl mx-auto text-center font-bold leading-tight">
                        From complete restorations to precision touch-ups, we offer comprehensive services to bring your classic car dreams to reality.
                    </h1>
                </div>

                {/* Projects Carousel */}
                <div
                    className="relative py-6"
                    style={{ perspective: "1500px" }}
                    data-aos="zoom-in-up"
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 sm:gap-6 py-10 md:gap-8 overflow-x-auto overflow-visible scrollbar-hide scroll-smooth pb-6 sm:pb-8"
                        style={{
                            scrollSnapType: "x mandatory",
                            paddingLeft: "10vw",
                            paddingRight: "10vw",
                        }}
                    >
                        <div className="shrink-0 w-[10vw]"></div>

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card shrink-0 w-[70vw] sm:w-[60vw]  md:w-[400px] lg:w-[380px] transition-all duration-700 ease-out cursor-pointer group"
                                style={{
                                    transform:
                                        index === activeIndex
                                            ? "scale(1.05) translateZ(80px) translateY(-20px)"
                                            : "scale(0.88) translateZ(0px) translateY(0px)",
                                    opacity: index === activeIndex ? 1 : 0.5,
                                    zIndex: index === activeIndex ? 50 : 10,
                                    scrollSnapAlign: "center",
                                }}
                                onClick={() => scrollToCard(index)}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <div
                                    className={`bg-zinc-900 rounded-3xl overflow-hidden transition-all duration-500 border ${index === activeIndex
                                        ? "border-zinc-700 shadow-2xl shadow-[#8b1a1a]/20"
                                        : "border-zinc-800 shadow-lg"
                                        }`}
                                    style={{ minHeight: "400px" }}
                                >
                                    {/* Images */}
                                    <div className="grid grid-cols-2 gap-3 p-5">
                                        <div className="rounded-2xl overflow-hidden bg-zinc-800 aspect-4/3">
                                            <img
                                                src={project.beforeImage}
                                                alt={`${project.title} before`}
                                                loading="lazy"
                                                className="w-full h-full object-cover opacity-70"
                                            />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden bg-zinc-800 aspect-4/3">
                                            <img
                                                src={project.afterImage}
                                                alt={`${project.title} after`}
                                                loading="lazy"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-6 pb-6">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 uppercase tracking-tight leading-snug">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm sm:text-base md:text-base leading-relaxed mb-4 sm:mb-6">
                                            {project.snippet}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1 h-8 bg-[#8b1a1a] rounded-full"></div>
                                                <span className="text-white font-medium text-sm">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => navigate(project.link)}
                                                className="bg-white text-white rounded-full p-2 hover:text-gray-300 transition-all duration-300"
                                            >
                                                <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="shrink-0 w-[10vw]"></div>
                    </div>

                    {/* Pagination Dots */}
                    <div
                        className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToCard(index)}
                                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? "bg-[#8b1a1a] w-6 sm:w-8"
                                    : "bg-gray-600 w-1.5 sm:w-2 hover:bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
};

export default HeroCurasol;
