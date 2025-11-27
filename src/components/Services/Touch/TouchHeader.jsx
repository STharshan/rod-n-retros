import React from 'react';

const TouchHeader = () => {
  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-8 mt-15">
          <a
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-[#8b1a1a] dark:hover:bg-[#8b1a1a]/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 text-[#8b1a1a] hover:text-[#8b1a1a]/80"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-left w-4 h-4 mr-2"
            >
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Home
          </a>
        </div> */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-18">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Touch Ups & Smart Repairs
              </h1>
              <p className="text-xl text-[#8b1a1a] font-medium">Minor Paint & Body Repairs</p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Keep your vehicle looking pristine with our professional touch-up and smart repair services. We specialize in minor paint repairs, scratch removal, and cosmetic improvements that maintain your car's appearance and value.
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
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/Bare metal respray23-1.jpeg"
                alt="Bare Metal Resprays"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouchHeader;