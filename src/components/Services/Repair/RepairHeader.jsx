import React from 'react';

const RepairHeader = () => {
  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-18">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Fiberglass Repairs
              </h1>
              <p className="text-xl text-[#8b1a1a] font-medium">Composite Body Restoration</p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Specialized fiberglass repair and restoration services for classic and modern vehicles. Our expertise in composite materials ensures durable, invisible repairs that restore both structural integrity and appearance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-10 rounded-md px-6 has-[&gt;svg]:px-4 bg-[#8b1a1a] hover:bg-[#8b1a1a]/90"
                href="/contact"
              >
                Get Free Quote
              </a>
              <a
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-[#8b1a1a] hover:text-[#8b1a1a]-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4"
                href="/gallery"
              >
                View Examples
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl">
            <div className="aspect-[4/3]  overflow-hidden bg-muted">
              <img
                src="/Full bare metal respray 24-2.jpeg"
                alt="Bare Metal Resprays"
                loading="lazy"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepairHeader;
