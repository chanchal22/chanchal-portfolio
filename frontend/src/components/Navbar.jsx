import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-navy text-white shadow-lg top-0 left-0 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-bhagwa tracking-wider uppercase">
            Chanchal Soni
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 items-center">
              <Link to="/" className="hover:text-bhagwa px-3 py-2 rounded-md font-medium transition-all">Home</Link>
              <Link to="/blog" className="hover:text-bhagwa px-3 py-2 rounded-md font-medium transition-all">Blog</Link>
              <Link to="/gallery" className="hover:text-bhagwa px-3 py-2 rounded-md font-medium transition-all">Gallery</Link>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4 ml-4">
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="text-white hover:text-bhagwa transition-all text-xl">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className="text-white hover:text-bhagwa transition-all text-xl">
                  <FaInstagram />
                </a>
                <Link to="/admin" className="text-white hover:text-bhagwa transition-all text-xl">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggle} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-bhagwa focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-navy pb-4 px-2 pt-2 shadow-xl flex flex-col space-y-2">
          <Link to="/" onClick={toggle} className="hover:bg-blue-900 px-3 py-2 rounded-md">Home</Link>
          <Link to="/blog" onClick={toggle} className="hover:bg-blue-900 px-3 py-2 rounded-md">Blog</Link>
          <Link to="/gallery" onClick={toggle} className="hover:bg-blue-900 px-3 py-2 rounded-md">Gallery</Link>
          <div className="flex gap-6 px-3 py-4 border-t border-blue-800">
             <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer"><FaFacebook size={24}/></a>
             <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer"><FaInstagram size={24}/></a>
             <Link to="/admin" onClick={toggle}><FaWhatsapp size={24}/></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;