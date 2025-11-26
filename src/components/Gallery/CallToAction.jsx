import React from 'react';
import { Quote, Info } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card container with glow effect */}
        <div className="bg-white dark:bg-[#1c1c1c] rounded-2xl p-10 text-center transition-all 
                        shadow-lg hover:shadow-[0_0_40px_rgba(139,26,26,0.8)] hover:-translate-y-1 ease-out">
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6 bg-[#8b1a1a] hover:bg-[#8b1a1a]/90 text-white"
                aria-label="Get a free quote"
              >
                <Quote className="w-4 h-4" />
                Get Free Quote
              </a>

              {/* Learn About Us Button */}
              <a
                href="/about"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6 border border-[#8b1a1a] text-[#8b1a1a] hover:bg-[#8b1a1a] hover:text-white"
                aria-label="Learn more about us"
              >
                <Info className="w-4 h-4" />
                Learn About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
