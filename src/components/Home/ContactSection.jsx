import React from 'react';
import { Phone, Mail } from 'lucide-react'; // Import Lucide icons

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance">Ready to Restore Your Classic?</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Get in touch today for a free consultation and quote. Let's bring your vintage automobile back to its former glory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Call Now Button */}
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs h-10 rounded-md has-[&gt;svg]:px-4 bg-[#8b1a1a]  hover:bg-[#8b1a1a] /90 text-lg px-8"
              href="tel:+1234567890"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>

            {/* Email Us Button */}
            <a
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-[#8b1a1a]  hover:text-[#8b1a1a] -foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md has-[&gt;svg]:px-4 text-lg px-8 bg-transparent"
              href="mailto:info@example.com"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
