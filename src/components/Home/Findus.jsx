"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FindUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section
            className="py-12 px-4 bg-white dark:bg-black transition-colors duration-300"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2
                    className="text-3xl md:text-4xl font-bold mb-10 text-black dark:text-white"
                    data-aos="fade-down"
                >
                    Find Us
                </h2>

                {/* Google Maps Embed */}
                <div
                    className="rounded-lg border-2 border-[#8b1a1a] overflow-hidden shadow-lg w-full h-[400px] "
                    data-aos="zoom-in"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.111327597861!2d-1.4218532!3d53.3591625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48799d8f89cb5457%3A0x519dce60b68b2638!2sRods%20n%20Retros!5e0!3m2!1sen!2slk!4v1762327140152!5m2!1sen!2slk"
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default FindUs;
