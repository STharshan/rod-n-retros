import React from 'react';
import { ArrowLeft } from 'lucide-react'; // Import Lucide icon

const GetInTouch = () => {
  return (
    <section className="relative pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button */}
        {/* <div className="mb-8 mt-15">
          <a
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-[#8b1a1a] dark:hover:bg-[#8b1a1a]/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 text-[#8b1a1a] hover:text-[#8b1a1a]/80"
            href="/"
            aria-label="Back to Home"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </div> */}

        {/* Main Content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight mt-15">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Ready to start your restoration project? Contact us today for a free consultation and detailed quote. We're here to help bring your classic car dreams to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
