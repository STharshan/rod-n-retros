import React from 'react';

const Header = () => {
    return (
        <section className="relative pt-16 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-15">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold text-balance leading-tight">
                                Classic Car
                                <span className="block text-[#8b1a1a] ">Restoration</span>
                                <span className="block">Excellence</span>
                            </h1>
                            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-lg">
                                Bringing vintage automobiles back to life with precision craftsmanship, attention to detail, and decades of expertise in automotive restoration.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                data-slot="button"
                                className="inline-flex items-center  justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-10 rounded-md has-[&_svg]:px-4 bg-[#8b1a1a]  hover:bg-[#8b1a1a]/90 text-lg px-8"
                                href="/contact"
                            >
                                Get Free Quote
                            </a>
                            <a
                                data-slot="button"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-[#8b1a1a]  hover:text-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[&_svg]:px-4 text-lg px-8 bg-transparent"
                                href="/gallery"
                            >
                                View Our Work
                            </a>
                        </div>
                        <div className="flex items-center gap-8 pt-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#8b1a1a] ">25+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#8b1a1a] ">500+</div>
                                <div className="text-sm text-muted-foreground">Cars Restored</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-[#8b1a1a] ">100%</div>
                                <div className="text-sm text-muted-foreground">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                            <img
                                src="/hero.jpg"
                                alt="Classic car restoration workshop"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;