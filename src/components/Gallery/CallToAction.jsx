import React from 'react';
import { Quote, Info } from 'lucide-react'; // Import Lucide icons

const CallToAction = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Let us bring your classic car vision to life. Contact us today to discuss your restoration project and get a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Get Free Quote Button */}
            <a
              data-slot="button"
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-10 rounded-md px-6 has-[&gt;svg]:px-4 bg-[#8b1a1a]  hover:bg-[#8b1a1a] /90"
              aria-label="Get a free quote"
            >
              <Quote className="w-4 h-4" />
              Get Free Quote
            </a>

            {/* Learn About Us Button */}
            <a
              data-slot="button"
              href="/about"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm hover:text-white font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-[#8b1a1a] dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&gt;svg]:px-4"
              aria-label="Learn more about us"
            >
              <Info className="w-4 h-4" />
              Learn About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
