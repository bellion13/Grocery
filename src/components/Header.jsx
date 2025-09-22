import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ShoppingCart } from 'lucide-react';
const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="flex justify-between items-center py-3 bg-green-200 shadow-md fixed w-full top-0 z-10">
        <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="logo" className="md:w-52 w-40" />
          </Link>
          <nav className="flex gap-5">
            <ul className="text-xl font-medium md:flex hidden gap-7">
              <li className="hover:text-green-700">
                <Link 
                  to="/" 
                  className={`hover:underline underline-offset-4 decoration-2 transition-all duration-300 ${
                    isActive('/') ? 'text-green-700 underline font-bold' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-green-700">
                <Link 
                  to="/shop" 
                  className={`hover:underline underline-offset-4 decoration-2 transition-all duration-300 ${
                    isActive('/shop') ? 'text-green-700 underline font-bold' : ''
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li className="hover:text-green-700">
                <Link 
                  to="/about" 
                  className={`hover:underline underline-offset-4 decoration-2 transition-all duration-300 ${
                    isActive('/about') ? 'text-green-700 underline font-bold' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="hover:text-green-700">
                <Link 
                  to="/contact" 
                  className={`hover:underline underline-offset-4 decoration-2 transition-all duration-300 ${
                    isActive('/contact') ? 'text-green-700 underline font-bold' : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ShoppingCart className="text-xl cursor-pointer" />
          </nav>

        </div>
      </div>
    </>
  );
};

export default Header;
