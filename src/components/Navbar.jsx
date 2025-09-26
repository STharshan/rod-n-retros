import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for services dropdown
  const [isDarkMode, setIsDarkMode] = useState(false); // State for Dark/Light mode
  const servicesRef = useRef(null); // Reference to the services dropdown

  // Close the services dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false); // Close dropdown when clicked outside
      }
    };

    // Attach the event listener when the component is mounted
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleServiceClick = () => {
    setIsServicesOpen(false); // Close the dropdown when a service is selected
  };

  // Toggle Dark Mode: Add/Remove the 'dark' class to the <html> element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark"); // Add dark mode class
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode class
    }
  }, [isDarkMode]); // Run this effect whenever isDarkMode changes

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-2 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link className="flex items-center space-x-2" to="/">
            <img src="logo.png" alt="Logo" className="h-20 w-30" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link className="hover:text-[#8b1a1a] transition-colors" to="/">Home</Link>

            {/* Services Dropdown for Large Screens */}
            <div className="relative group" ref={servicesRef}>
              <button
                className="hover:text-[#8b1a1a] transition-colors flex items-center space-x-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)} // Toggle on button click
              >
                <span>Services</span>
                {/* Conditional Rendering of Icons */}
                {isServicesOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                    <path d="M1 10l6-6 6 6"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                    <path d="M1 6l6 6 6-6"></path>
                  </svg>
                )}
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
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

            <Link className="hover:text-[#8b1a1a] transition-colors" to="/gallery">Gallery</Link>
            <Link className="hover:text-[#8b1a1a] transition-colors" to="/about">About</Link>
            <Link className="hover:text-[#8b1a1a] transition-colors" to="/contact">Contact</Link>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center gap-2">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <path d="M12 2a9.93 9.93 0 0 1 7.071 2.93A9.97 9.97 0 0 1 22 12a9.97 9.97 0 0 1-2.929 7.071A9.93 9.93 0 0 1 12 22a9.93 9.93 0 0 1-7.071-2.93A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.929-7.071A9.93 9.93 0 0 1 12 2z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                  <circle cx="12" cy="12" r="5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu h-6 w-6">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 absolute w-full top-16  left-0">
          <div className="flex flex-col py-4 px-4 space-y-2">
            <Link className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors" to="/">Home</Link>
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)} // Toggle services dropdown
                className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors flex items-center space-x-2"
              >
                <span>Services</span>
                {/* Conditional Rendering of Icons */}
                {isServicesOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                    <path d="M1 10l6-6 6 6"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4">
                    <path d="M1 6l6 6 6-6"></path>
                  </svg>
                )}
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
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
            <Link className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors" to="/gallery">Gallery</Link>
            <Link className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors" to="/about">About</Link>
            <Link className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors" to="/contact">Contact</Link>
            <Link className="px-4 py-2 text-lg bg-[#8b1a1a] w-40 text-center rounded-md font-medium hover:text-[#8b1a1a] transition-colors" to="/contact">Get Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
