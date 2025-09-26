import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'; // Import Lucide icons

const contactInfo = [
    {
        icon: <Phone className="w-5 h-5 text-[#8b1a1a] " />,
        title: "Phone",
        detail: "(555) 123-4567",
        description: "Call for immediate assistance",
    },
    {
        icon: <Mail className="w-5 h-5 text-[#8b1a1a] " />,
        title: "Email",
        detail: "info@rodsnretros.com",
        description: "We respond within 24 hours",
    },
    {
        icon: <MapPin className="w-5 h-5 text-[#8b1a1a] " />,
        title: "Address",
        detail: "123 Restoration Lane\nClassic City, CC 12345",
        description: "Visit our workshop by appointment",
    },
    {
        icon: <Clock className="w-5 h-5 text-[#8b1a1a] " />,
        title: "Business Hours",
        detail: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed",
        description: "",
    },
];

const whyChooseUs = [
    "25+ years of restoration experience",
    "Certified technicians and craftsmen",
    "Free detailed quotes and consultations",
    "Quality guarantee on all work",
    "Transparent pricing and timelines",
];

const RequestQuote = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Request a Quote Card */}
                    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-#e0e0e0/50">
                        <div className="px-6 pb-6 border-b">
                            <div className="font-semibold text-2xl">Request a Quote</div>
                            <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>
                        <div className="px-6">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="name">Full Name *</label>
                                        <input className="w-full h-9 px-3 py-1 rounded-md border bg-transparent border-input" id="name" required placeholder="John Smith" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="email">Email Address *</label>
                                        <input className="w-full h-9 px-3 py-1 rounded-md border bg-transparent border-input" id="email" required placeholder="john@example.com" type="email" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="phone">Phone Number</label>
                                        <input className="w-full h-9 px-3 py-1 rounded-md border bg-transparent border-input" id="phone" placeholder="(555) 123-4567" type="tel" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="service">Service Needed</label>
                                        <select className="w-full px-3 py-2 border bg-transparent rounded-md text-sm" id="service" name="service">
                                            <option value="">Select a service</option>
                                            <option value="Bare Metal Resprays">Bare Metal Resprays</option>
                                            <option value="Full Restorations">Full Restorations</option>
                                            <option value="Touch Ups & Smart Repairs">Touch Ups & Smart Repairs</option>
                                            <option value="Welding & Fabrication">Welding & Fabrication</option>
                                            <option value="Fiberglass Repairs">Fiberglass Repairs</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="vehicle">Vehicle Information</label>
                                    <input className="w-full h-9 px-3 py-1 rounded-md border bg-transparent border-input" id="vehicle" placeholder="Year, Make, Model (e.g., 1967 Ford Mustang)" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="message">Project Details *</label>
                                    <textarea className="w-full px-3 py-2 rounded-md border bg-transparent border-input" id="message" name="message" required rows="5" placeholder="Please describe your restoration project, timeline, and any specific requirements..."></textarea>
                                </div>

                                <button className="w-full h-10 px-6 bg-[#8b1a1a] text-primary-foreground rounded-md shadow-xs hover:bg-[#8b1a1a]/90 flex items-center justify-center gap-2">
                                    <Send className="w-4 h-4 mr-2" /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information Card */}
                    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-border/50">
                        <div className="px-6 border-b pb-6">
                            <div className="font-semibold text-xl">Contact Information</div>
                        </div>
                        <div className="px-6 space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-[#8b1a1a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{info.title}</h3>
                                        <p className="text-muted-foreground">{info.detail}</p>
                                        {info.description && <p className="text-sm text-muted-foreground">{info.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us Section (Centered Card) */}
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-border/50 mx-auto mt-12 max-w-sm">
                    <div className="px-6 border-b pb-6">
                        <div className="font-semibold text-xl text-center">Why Choose Us?</div>
                    </div>
                    <div className="px-6 space-y-4">
                        {whyChooseUs.map((reason, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-[#8b1a1a] rounded-full"></div>
                                <p className="text-sm text-center">{reason}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RequestQuote;
