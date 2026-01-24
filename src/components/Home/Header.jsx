import React from "react";

const HeroSection = () => {
    return (
        <section className="relative pt-16 pb-20 h-[100vh] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                poster="/fall.png"
                onError={(e) => (e.currentTarget.style.display = "none")}
            >
            </video>

            {/* Overlay (for readability) */}
            <div className="absolute inset-0 -z-10"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div className="space-y-8 text-white">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                Classic Car
                                <span className="block text-[#8b1a1a]">Restoration</span>
                                <span className="block">Excellence</span>
                            </h1>

                            <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                                Bringing vintage automobiles back to life with precision
                                craftsmanship, attention to detail, and decades of expertise in
                                automotive restoration.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center h-12 px-8 text-lg font-medium text-white bg-[#8b1a1a] rounded-md hover:bg-[#8b1a1a]/90 transition"
                            >
                                Get Free Quote
                            </a>

                            <a
                                href="/gallery"
                                className="inline-flex items-center justify-center h-12 px-8 text-lg font-medium text-white border border-white/60 rounded-md hover:bg-[#8b1a1a] hover:border-[#8b1a1a] transition"
                            >
                                View Our Work
                            </a>
                        </div>

                        <div className="flex items-center gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#8b1a1a]">25+</div>
                                <div className="text-sm text-gray-300">Years Experience</div>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#8b1a1a]">500+</div>
                                <div className="text-sm text-gray-300">Cars Restored</div>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#8b1a1a]">100%</div>
                                <div className="text-sm text-gray-300">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
