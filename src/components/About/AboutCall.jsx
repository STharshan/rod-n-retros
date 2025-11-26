import React from 'react';

const AboutCall = () => {
  const buttons = [
    {
      text: "Get Free Quote",
      href: "/contact",
      bgClass: "bg-[#8b1a1a] text-white",
      hoverClass: "hover:bg-[#8b1a1a]/90",
    },
    {
      text: "View Our Portfolio",
      href: "/gallery",
      bgClass: "bg-background text-black dark:text-white",
      hoverClass: "hover:bg-[#8b1a1a] hover:text-white",
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card container */}
        <div className="bg-white dark:bg-black rounded-2xl shadow-lg p-10 text-center transition-all hover:shadow-2xl hover:-translate-y-1 ease-out hover:ring-2 hover:ring-red-600">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to Start Your Restoration?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join the hundreds of satisfied customers who have trusted us with their classic car dreams. Let's discuss your project today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shadow-xs h-10 rounded-md px-6 ${button.bgClass} ${button.hoverClass}`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCall;
