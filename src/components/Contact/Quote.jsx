import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
    {
        icon: <Phone className="w-5 h-5 text-[#8b1a1a]" />,
        title: "Phone",
        detail: "+44 7521 224620",
        description: "Call for immediate assistance",
        link: "tel:+447521224620",
    },
    {
        icon: <Mail className="w-5 h-5 text-[#8b1a1a]" />,
        title: "Email",
        detail: "steelcityclassics@hotmail.com",
        description: "We respond within 24 hours",
        link: "mailto:steelcityclassics@hotmail.com",
    },
    {
        icon: <MapPin className="w-5 h-5 text-[#8b1a1a]" />,
        title: "Address",
        detail: "23A Mansfield Road, Sheffield, United Kingdom",
        description: "Visit our workshop by appointment",
        link: "https://maps.app.goo.gl/wKrkfNquHBcAZfe88",
    },
    {
        icon: <Clock className="w-5 h-5 text-[#8b1a1a]" />,
        title: "Business Hours",
        detail:
            "Monday - Saturday : 10:00 AM - 7:00 PM\n Sunday : Closed",
        description: "",
        link: null,
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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        vehicle: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email Address is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.message.trim())
            newErrors.message = "Project Details are required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const whatsappNumber = "+447521224620";
        const textMessage = `*New Quote Request *%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
 Phone: ${formData.phone || "N/A"}%0A
 Service: ${formData.service || "N/A"}%0A
Vehicle: ${formData.vehicle || "N/A"}%0A
 Project Details: ${formData.message}`;

        const whatsappURL = `https://wa.me/${whatsappNumber.replace(
            "+",
            ""
        )}?text=${textMessage}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Request a Quote Card */}
                    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-[#e0e0e0]/50 py-6 shadow-sm">
                        <div className="px-6 pb-6">
                            <div className="font-semibold text-2xl">Request a Quote</div>
                            <p className="text-muted-foreground">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </div>
                        <div className="px-6">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="name">
                                            Full Name *
                                        </label>
                                        <input
                                            className="w-full h-9 px-3 py-1 rounded-md border bg-transparent border-[#e0e0e0]/50"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({ ...formData, name: e.target.value })
                                            }
                                            placeholder="Enter Your Full Name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-600 text-xs">{errors.name}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="email">
                                            Email Address *
                                        </label>
                                        <input
                                            className="w-full h-9 px-3 py-1 rounded-md border bg-transparent border-[#e0e0e0]/50"
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                            placeholder="Enter Your Email Address"
                                        />
                                        {errors.email && (
                                            <p className="text-red-600 text-xs">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <input
                                            className="w-full h-9 px-3 py-1 rounded-md border bg-transparent border-[#e0e0e0]/50"
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                setFormData({ ...formData, phone: e.target.value })
                                            }
                                            placeholder="Enter Your Phone number"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium" htmlFor="service">
                                            Service Needed
                                        </label>
                                        <select
                                            className="w-full px-3 py-2 border bg-white rounded-md text-sm border-[#e0e0e0]/50"
                                            id="service"
                                            value={formData.service}
                                            onChange={(e) =>
                                                setFormData({ ...formData, service: e.target.value })
                                            }
                                        >
                                            <option value="">Select a service</option>
                                            <option>Bare Metal Resprays</option>
                                            <option>Full Restorations</option>
                                            <option>Touch Ups & Smart Repairs</option>
                                            <option>Welding & Fabrication</option>
                                            <option>Fiberglass Repairs</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="vehicle">
                                        Vehicle Information
                                    </label>
                                    <input
                                        className="w-full h-9 px-3 py-1 rounded-md border bg-transparent border-[#e0e0e0]/50"
                                        id="vehicle"
                                        value={formData.vehicle}
                                        onChange={(e) =>
                                            setFormData({ ...formData, vehicle: e.target.value })
                                        }
                                        placeholder="Year, Make, Model (e.g., 1967 Ford Mustang)"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="message">
                                        Project Details *
                                    </label>
                                    <textarea
                                        className="w-full px-3 py-2 rounded-md border bg-transparent border-[#e0e0e0]/50"
                                        id="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        placeholder="Describe your restoration project, timeline, etc."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-600 text-xs">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-10 px-6 bg-[#8b1a1a] text-white rounded-md shadow-xs hover:bg-[#8b1a1a]/90 flex items-center justify-center gap-2"
                                >
                                    <Send className="w-4 h-4 mr-2" /> Send Message
                                </button>
                                  <p className="text-xs text-center dark:text-gray-300">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-[#e0e0e0]/50 py-6 shadow-sm">
                        <div className="px-6 border-b border-[#e0e0e0]/50 pb-6">
                            <div className="font-semibold text-xl">Contact Information</div>
                        </div>
                        <div className="px-6 space-y-6">
                            {contactInfo.map((info, i) => (
                                <a
                                    key={i}
                                    href={info.link || "#"}
                                    target={info.link ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className={`flex items-start space-x-4 transition hover:bg-[#8b1a1a]/5 p-2 rounded-lg ${info.link ? "cursor-pointer" : "cursor-default"
                                        }`}
                                >
                                    <div className="w-10 h-10 bg-[#8b1a1a]/10 rounded-lg flex items-center justify-center">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{info.title}</h3>
                                        <p className="text-muted-foreground whitespace-pre-line">
                                            {info.detail}
                                        </p>
                                        {info.description && (
                                            <p className="text-sm text-muted-foreground">
                                                {info.description}
                                            </p>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-[#e0e0e0]/50 py-6 shadow-sm mx-auto mt-12 max-w-sm">
                    <div className="px-6 border-b border-[#e0e0e0]/50 pb-6">
                        <div className="font-semibold text-xl text-center">Why Choose Us?</div>
                    </div>
                    <div className="px-6 space-y-4">
                        {whyChooseUs.map((reason, i) => (
                            <div key={i} className="flex items-center space-x-3">
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
