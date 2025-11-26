import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const mobileServicesRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (mobileServicesRef.current && !mobileServicesRef.current.contains(event.target)) {
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    setIsMenuOpen(false); // Close mobile menu when service is selected
  };

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false); // Close services when toggling main menu
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-2 border-b border-gray-300 dark:border-gray-700 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="logo"
              className="h-20 w-25 block  dark:hidden"
            />
            <img
              src="/darklogo.png"
              alt="logo"
              className="h-20 w-25  hidden dark:block"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link className="hover:text-[#8b1a1a] dark:hover:text-[#fc8181] transition-colors" to="/">Home</Link>

            {/* Services Dropdown for Large Screens */}
            <div className="relative group" ref={servicesRef}>
              <button
                className="hover:text-[#8b1a1a] dark:hover:text-[#fc8181] transition-colors flex items-center space-x-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                {isServicesOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M1 10l6-6 6 6"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M1 6l6 6 6-6"></path>
                  </svg>
                )}
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-700 dark:border-gray-600">
                  <div className="py-2">
                    <Link onClick={handleServiceClick} className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/bare-metal-resprays">Bare Metal Resprays</Link>
                    <Link onClick={handleServiceClick} className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/full-restorations">Full Restorations</Link>
                    <Link onClick={handleServiceClick} className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/touch-ups">Touch Ups & Smart Repairs</Link>
                    <Link onClick={handleServiceClick} className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/welding-fabrication">Welding & Fabrication</Link>
                    <Link onClick={handleServiceClick} className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/fiberglass-repairs">Fiberglass Repairs</Link>
                  </div>
                </div>
              )}
            </div>

            <Link className="hover:text-[#8b1a1a] dark:hover:text-[#fc8181] transition-colors" to="/gallery">Gallery</Link>
            <Link className="hover:text-[#8b1a1a] dark:hover:text-[#fc8181] transition-colors" to="/about">About</Link>
            <Link className="hover:text-[#8b1a1a] dark:hover:text-[#fc8181] transition-colors" to="/contact">Contact</Link>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-6">

            {/* Get Quote Button - Desktop only */}
            <Link
              to="/contact"
              className="hidden md:inline-block rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#8b1a1a] hover:opacity-90 dark:bg-white dark:text-black transition-opacity"
            >
              Get Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#8b1a1a] transition-colors"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                // Close icon
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6L18 18"></path>
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-3 space-y-1 max-h-screen overflow-y-auto">
            {/* Home Link */}
            <Link
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Services Dropdown for Mobile */}
            <div className="relative" ref={mobileServicesRef}>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <span>Services</span>
                {isMobileServicesOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M1 10l6-6 6 6"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M1 6l6 6 6-6"></path>
                  </svg>
                )}
              </button>

              {isMobileServicesOpen && (
                <div className="mt-1 space-y-1 bg-gray-50 dark:bg-gray-700 rounded-md">
                  <Link
                    onClick={handleServiceClick}
                    className="block px-6 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                    to="/services/bare-metal-resprays"
                  >
                    Bare Metal Resprays
                  </Link>
                  <Link
                    onClick={handleServiceClick}
                    className="block px-6 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                    to="/services/full-restorations"
                  >
                    Full Restorations
                  </Link>
                  <Link
                    onClick={handleServiceClick}
                    className="block px-6 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                    to="/services/touch-ups"
                  >
                    Touch Ups & Smart Repairs
                  </Link>
                  <Link
                    onClick={handleServiceClick}
                    className="block px-6 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                    to="/services/welding-fabrication"
                  >
                    Welding & Fabrication
                  </Link>
                  <Link
                    onClick={handleServiceClick}
                    className="block px-6 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md transition-colors"
                    to="/services/fiberglass-repairs"
                  >
                    Fiberglass Repairs
                  </Link>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            <Link
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
              to="/gallery"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#8b1a1a] dark:hover:text-[#fc8181] hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Get Quote Button */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
              <Link
                className="block w-full px-4 py-3 text-center text-base font-semibold text-white bg-[#8b1a1a] hover:bg-[#7a1717] dark:bg-[#8b1a1a] dark:hover:bg-[#7a1717] rounded-lg transition-colors"
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;