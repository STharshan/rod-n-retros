import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card container with glow effect */}
        <div className="bg-white dark:bg-[#1c1c1c] rounded-2xl p-10 text-center transition-all
                        shadow-lg hover:shadow-[0_0_40px_rgba(139,26,26,0.8)] hover:-translate-y-1 ease-out">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">
              Ready to Restore Your Classic?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Get in touch today for a free consultation and quote. Let's bring your vintage automobile back to its former glory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Call Now Button */}
              <a
                href="tel:+44 7521 224620"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all shadow-xs h-10 rounded-md bg-[#8b1a1a] hover:bg-[#8b1a1a]/90 text-white text-lg px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>

              {/* Email Us Button */}
              <a
                href="mailto:steelcityclassics@hotmail.com"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all shadow-xs h-10 rounded-md border border-[#8b1a1a] text-[#8b1a1a] hover:bg-[#8b1a1a] hover:text-white text-lg px-8"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
