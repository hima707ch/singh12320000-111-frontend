import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header id="Header_1" className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-12 w-12 rounded-full hover:opacity-80 transition-opacity" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">XYZ Hotels</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" id="Header_3">
            <Link to="/" className="hover:text-yellow-300 transition-colors duration-200 font-semibold">Home</Link>
            <Link to="/roomlisting" className="hover:text-yellow-300 transition-colors duration-200 font-semibold">Rooms</Link>
            <Link to="/login" className="hover:text-yellow-300 transition-colors duration-200 font-semibold">Login</Link>
            <Link to="/register" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200 font-bold">Register</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            id="Header_4"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4" id="Header_5">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-yellow-300 transition-colors duration-200">Home</Link>
              <Link to="/roomlisting" className="hover:text-yellow-300 transition-colors duration-200">Rooms</Link>
              <Link to="/login" className="hover:text-yellow-300 transition-colors duration-200">Login</Link>
              <Link to="/register" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200 text-center font-bold">Register</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;