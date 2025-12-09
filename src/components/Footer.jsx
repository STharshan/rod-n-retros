import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#2E1F1B] text-white py-12 dark:border-gray-700 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src="/newlogo.png"
              alt="Rods N Retros Logo"
              className="h-20 w-30"
            />
            <p className="text-primary-foreground/80 text-pretty">
              Professional classic car restoration services with over 25 years of experience.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a className="hover:text-primary-foreground transition-colors" href="/services/bare-metal-resprays">
                  Bare Metal Resprays
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors" href="/services/full-restorations">
                  Full Restorations
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors" href="/services/touch-ups">
                  Touch Ups &amp; Smart Repairs
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors" href="/services/welding-fabrication">
                  Welding &amp; Fabrication
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors" href="/services/fiberglass-repairs">
                  Fiberglass Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="font-semibold mb-4">Quick Link</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a className="hover:text-primary-foreground transition-colors" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors" href="/gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a className="hover:text-primary-foreground transition-colors" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              {/* Address Link */}
              <p>
                <a
                  href="https://maps.app.goo.gl/wKrkfNquHBcAZfe88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  23A Mansfield Road,<br /> Sheffield, United Kingdom
                </a>
              </p>
              {/* Phone Number Link */}
              <p>
                <a
                  href="tel:+44 7521 224620"
                  className="text-white hover:underline"
                >
                  +44 7521 224620
                </a>
              </p>

              {/* Email Address Link */}
              <p>
                <a
                  href="mailto:RodsnRetros@hotmail.com"
                  target='_blank'
                  className="text-white hover:underline"
                >
                  RodsnRetros@hotmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Rods N Retros. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#8b1a1a]  transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#8b1a1a]  transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely (unchanged) */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b1a1a]  hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
