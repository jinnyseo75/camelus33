"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggleMenu();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0F2167] to-[#0A1854] shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center">
            <FaBook className="text-2xl text-white" />
          </div>
          <span className="text-2xl font-black text-white">Camelus33</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <Link 
            href="#features" 
            className="text-lg font-bold text-white hover:text-[#E0E0E0] transition-colors"
          >
            기능
          </Link>
          <Link 
            href="#problems" 
            className="text-lg font-bold text-white hover:text-[#E0E0E0] transition-colors"
          >
            고민해결
          </Link>
          <Link 
            href="#register" 
            className="px-6 py-3 bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-lg font-bold rounded-lg hover:shadow-lg transition-all shadow-md"
          >
            사전예약
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div 
          className="md:hidden"
          onClick={handleToggleMenu}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="메뉴 열기"
          role="button"
        >
          {isMenuOpen ? (
            <div className="w-12 h-12 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center">
              <FaTimes className="text-2xl text-white" />
            </div>
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-[#9B111E] to-[#7D0A18] rounded-lg flex items-center justify-center">
              <FaBars className="text-2xl text-white" />
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gradient-to-b from-[#0A1854] to-[#0F2167] py-6 px-6 shadow-lg"
        >
          <div className="flex flex-col space-y-6">
            <Link 
              href="#features" 
              className="text-xl font-bold text-white hover:text-[#E0E0E0] transition-colors"
              onClick={handleToggleMenu}
            >
              기능
            </Link>
            <Link 
              href="#problems" 
              className="text-xl font-bold text-white hover:text-[#E0E0E0] transition-colors"
              onClick={handleToggleMenu}
            >
              고민해결
            </Link>
            <Link 
              href="#register" 
              className="px-6 py-4 bg-gradient-to-r from-[#9B111E] to-[#7D0A18] text-white text-xl font-bold rounded-lg hover:shadow-lg transition-all text-center shadow-md"
              onClick={handleToggleMenu}
            >
              사전예약
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 