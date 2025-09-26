import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-2 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link className="flex items-center space-x-2" to="/">
            <img
              src="logo.png"
              alt="Rods N Retros Logo"
              className="h-20 w-30"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-foreground hover:text-[#8b1a1a] transition-colors" to="/">Home</Link>
            <div className="relative group">
              <button className="text-foreground hover:text-[#8b1a1a] transition-colors">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/bare-metal-resprays">
                    Bare Metal Resprays
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/full-restorations">
                    Full Restorations
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/touch-ups">
                    Touch Ups & Smart Repairs
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/welding-fabrication">
                    Welding & Fabrication
                  </Link>
                  <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/fiberglass-repairs">
                    Fiberglass Repairs
                  </Link>
                </div>
              </div>
            </div>
            <Link className="text-foreground hover:text-[#8b1a1a] transition-colors" to="/gallery">Gallery</Link>
            <Link className="text-foreground hover:text-[#8b1a1a] transition-colors" to="/about">About</Link>
            <Link className="text-foreground hover:text-[#8b1a1a] transition-colors" to="/contact">Contact</Link>
            <Link className="inline-flex bg-[#8b1a1a] py-1 px-4 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 hover:bg-[#8b1a1a]/90" to="/contact">Get Quote</Link>
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-300 absolute w-full top-16 left-0">
            <div className="flex flex-col py-4 px-4 space-y-2">
              <Link className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors" to="/">Home</Link>
              <div className="relative">
                <button className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors">
                  Services
                </button>
                <div className="absolute top-full left-0 mt-2 w-full bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/bare-metal-resprays">
                      Bare Metal Resprays
                    </Link>
                    <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/full-restorations">
                      Full Restorations
                    </Link>
                    <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/touch-ups">
                      Touch Ups & Smart Repairs
                    </Link>
                    <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/welding-fabrication">
                      Welding & Fabrication
                    </Link>
                    <Link className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors" to="/services/fiberglass-repairs">
                      Fiberglass Repairs
                    </Link>
                  </div>
                </div>
              </div>
              <Link className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors" to="/gallery">Gallery</Link>
              <Link className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors" to="/about">About</Link>
              <Link className="px-4 py-2 text-lg text-foreground hover:text-[#8b1a1a] transition-colors" to="/contact">Contact</Link>
              <Link className="px-4 py-2 text-lg bg-[#8b1a1a] w-40 text-center rounded-md font-medium  hover:text-[#8b1a1a] transition-colors" to="/contact">Get Quote</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
