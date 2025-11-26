import React from 'react';

const ReadyToGetStarted = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container */}
        <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-10 text-center transition-all hover:shadow-2xl hover:-translate-y-1 ease-out">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Contact us today for a free consultation and detailed quote for your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 📞 Call Button */}
              <a
                href="tel:+44 7521 224620"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6 bg-[#8b1a1a] hover:bg-[#8b1a1a]/90 text-white"
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
                  className="lucide lucide-phone w-5 h-5 mr-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call for Quote
              </a>

              {/* 📧 Email Button */}
              <a
                href="mailto:steelcityclassics@hotmail.com"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm border-gray-200 font-medium transition-all shadow-xs h-10 rounded-md px-6 border bg-background hover:bg-[#8b1a1a] hover:text-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:text-white text-black"
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
                  className="lucide lucide-mail w-5 h-5 mr-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
