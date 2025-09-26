import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2E1F1B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src="/logo.jpeg"
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
            <h4 className="font-semibold mb-4">Company</h4>
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
                  href="https://www.google.com/maps?q=123+Restoration+Lane,+Classic+City,+CC+12345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  123 Restoration Lane, <br />Classic City, CC 12345
                </a>
              </p>
              {/* Phone Number Link */}
              <p>
                <a
                  href="tel:+15551234567"
                  className="text-white hover:underline"
                >
                  (555) 123-4567
                </a>
              </p>

              {/* Email Address Link */}
              <p>
                <a
                  href="mailto:info@rodsnretros.com"
                  className="text-white hover:underline"
                >
                  info@rodsnretros.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© 2025 Rods N Retros. All rights reserved.</p>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline text-white "
          >
            Ansely
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
