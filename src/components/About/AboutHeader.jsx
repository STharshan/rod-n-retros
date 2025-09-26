import React from 'react';
import { ArrowLeft } from 'lucide-react'; // Import the Lucide icon

const AboutSection = () => {
    return (
        <section className="relative pt-16 pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
                {/* <div className="mb-8">
                    <a
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-[#8b1a1a]  dark:hover:bg-[#8b1a1a] /50 h-9 px-4 py-2 has-[&gt;svg]:px-3 text-[#8b1a1a]  hover:text-[#8b1a1a] /80"
                        href="/"
                        aria-label="Back to Home"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </a>
                </div> */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                            About Rods N Retros
                        </h1>
                        <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                            For over 25 years, we've been passionate about bringing classic automobiles back to life. Our
                            dedication to craftsmanship, attention to detail, and commitment to excellence has made us the trusted choice for classic car restoration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Start Your Project Button */}
                            <a
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-10 rounded-md px-6 has-[&gt;svg]:px-4 bg-[#8b1a1a]  hover:bg-[#8b1a1a] /90"
                                href="/contact"
                            >
                                Start Your Project
                            </a>
                            {/* View Our Work Button */}
                            <a
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-[#8b1a1a]  hover:text-[#8b1a1a] -foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4"
                                href="/gallery"
                            >
                                View Our Work
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                            <img
                                src="/hero.jpg"
                                alt="Rods N Retros workshop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
