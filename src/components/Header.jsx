import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import Logo from "../assets/Logo.png";
import { ShoppingCart, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const cartItems = useSelector(state => state.cart.totalQuantity);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="bg-green-100 shadow-xl fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <img src={Logo} alt="logo" className="h-12 w-auto sm:h-14 md:w-65 " />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-8 text-xl font-medium">
                <li>
                  <Link
                    to="/"
                    className={`hover:text-green-700 hover:underline underline-offset-4 decoration-2 transition-all duration-300 ${
                      isActive('/') ? 'text-green-700 underline font-bold' : 'text-gray-800'
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className={`hover:text-green-700 hover:underline underline-offset-4 decoration-2 transition-all duration-300 ${
                      isActive('/shop') ? 'text-green-700 underline font-bold' : 'text-gray-800'
                    }`}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`hover:text-green-700 hover:underline underline-offset-4 decoration-2 transition-all duration-300 ${
                      isActive('/about') ? 'text-green-700 underline font-bold' : 'text-gray-800'
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`hover:text-green-700 hover:underline underline-offset-4 decoration-2 transition-all duration-300 ${
                      isActive('/contact') ? 'text-green-700 underline font-bold' : 'text-gray-800'
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Desktop Cart */}
              <Link
                to="/cart"
                className={`flex items-center relative p-2 rounded-lg hover:bg-green-200 transition-colors duration-300 ${
                  isActive('/cart') ? 'text-green-700 bg-green-200' : 'text-gray-800'
                }`}
              >
                <ShoppingCart size={24} />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {cartItems > 99 ? '99+' : cartItems}
                  </span>
                )}
              </Link>
            </nav>

            {/* Mobile Menu Button & Cart */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Cart */}
              <Link
                to="/cart"
                className={`flex items-center relative p-2 rounded-lg hover:bg-green-200 transition-colors duration-300 ${
                  isActive('/cart') ? 'text-green-700 bg-green-200' : 'text-gray-800'
                }`}
                onClick={closeMobileMenu}
              >
                <ShoppingCart size={24} />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {cartItems > 99 ? '99+' : cartItems}
                  </span>
                )}
              </Link>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-green-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 mr-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-gray-800" />
                ) : (
                  <Menu size={24} className="text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 bg-green-50 border-t border-green-200">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isActive('/') 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-800 hover:bg-green-200'
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isActive('/shop') 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-800 hover:bg-green-200'
                }`}
                onClick={closeMobileMenu}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isActive('/about') 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-800 hover:bg-green-200'
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isActive('/contact') 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-800 hover:bg-green-200'
                }`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 mt-[72px]"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};

export default Header;