import React from 'react';

const AboutCall = () => {
  const buttons = [
    {
      text: "Get Free Quote",
      href: "/contact",
      bgClass: "bg-[#8b1a1a] ",
      hoverClass: "hover:bg-[#8b1a1a] /90",
    },
    {
      text: "View Our Portfolio",
      href: "/gallery",
      bgClass: "bg-background",
      hoverClass: "hover:bg-[#8b1a1a]  hover:text-[#8b1a1a] -foreground",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ready to Start Your Restoration?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join the hundreds of satisfied customers who have trusted us with their classic car dreams. Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <a
                key={index}
                data-slot="button"
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium hover:text-white transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md px-6 has-[&gt;svg]:px-4 ${button.bgClass} ${button.hoverClass}`}
                href={button.href}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCall;
