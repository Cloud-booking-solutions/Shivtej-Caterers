
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-40">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-spice-red">Shivtej Caterers</span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-spice-red" />
            ) : (
              <Menu className="h-6 w-6 text-spice-red" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <Link 
              to="/book" 
              className="bg-spice-red text-white px-4 py-2 rounded hover:bg-spice-red/90 transition-all"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks mobile />
            <Link 
              to="/book" 
              className="bg-spice-red text-white px-4 py-2 rounded text-center hover:bg-spice-red/90 transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile }) => {
  const linkClass = mobile 
    ? "block py-2 text-center hover:text-spice-red" 
    : "hover:text-spice-red transition-colors";
  
  return (
    <>
      <Link to="/" className={linkClass}>Home</Link>
      <Link to="/about" className={linkClass}>About</Link>
      <Link to="/services" className={linkClass}>Services</Link>
      <Link to="/menu" className={linkClass}>Menu</Link>
      <Link to="/contact" className={linkClass}>Contact Us</Link>
    </>
  );
};

export default Navbar;
