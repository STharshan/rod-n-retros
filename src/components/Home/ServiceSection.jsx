import React from 'react';
import { Paintbrush, Award, Shield, ArrowRight, Wrench } from 'lucide-react'; // Import Lucide icons

const services = [
    {
        title: 'Bare Metal Resprays',
        description: 'Complete paint removal and professional respray services for a flawless finish.',
        link: '/services/bare-metal-resprays',
        icon: <Paintbrush className="w-6 h-6 text-[#8b1a1a] dark:text-white" />, // Lucide Paintbrush icon
    },
    {
        title: 'Full Restorations',
        description: 'Comprehensive restoration services bringing classic cars back to their former glory.',
        link: '/services/full-restorations',
        icon: <Award className="w-6 h-6 text-[#8b1a1a] dark:text-white" />, // Lucide Award icon
    },
    {
        title: 'Touch Ups & Smart Repairs',
        description: 'Professional minor repair services to keep your vehicle looking pristine.',
        link: '/services/touch-ups',
        icon: <Shield className="w-6 h-6 text-[#8b1a1a] dark:text-white" />, // Lucide Shield icon
    },
    {
        title: 'Welding & Fabrication',
        description: 'Expert metalwork and fabrication services for structural repairs and modifications.',
        link: '/services/touch-ups',
        icon: <Wrench className="w-6 h-6 text-[#8b1a1a] dark:text-white" />, // Lucide Shield icon
    },
    {
        title: 'Fiberglass Repairs',
        description: 'Specialized fiberglass repair and restoration for classic and modern vehicles.',
        link: '/services/touch-ups',
        icon: <Shield  className="w-6 h-6 text-[#8b1a1a] dark:text-white" />, // Lucide Shield icon
    },
    // Add more services as needed
];

const ServiceSection = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-balance">Our Restoration Services</h2>
                    <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                        From complete restorations to precision touch-ups, we offer comprehensive services to bring your classic car dreams to reality.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-[#8b1a1a]/50">
                            <div className="p-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-[#8b1a1a]/10 dark:bg-[#8b1a1a] dark:text-white rounded-lg flex items-center justify-center group-hover:bg-[#8b1a1a]/20 dark:group-hover:bg-[#8b1a1a] transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-balance">{service.title}</h3>
                                    <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
                                    <a
                                        className="inline-flex items-center p-2 hover:text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-[#8b1a1a] dark:hover:bg-[#8b1a1a]/50 h-auto text-[#8b1a1a]"
                                        href={service.link}
                                    >
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
