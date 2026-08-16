"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full font-sans shadow-md relative">
      {/* Top Bar */}
      <div className="hidden bg-[#081839] text-gray-300 text-[11px] py-2">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span className="text-yellow-500 font-semibold">🎓 Admissions Open 2026-27</span>
            <span className="text-gray-500">|</span>
            <span>Build Your Skills. Build Your Future.</span>
          </div>
          <div className="flex gap-5 items-center">
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">📞 +91 70076 27081</span>
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">✉️ shakyaashwani906@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center">
          
          {/* Logo Section (Hover Scale Animation) */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 flex-shrink-0 flex-1 justify-start group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo.jpeg" 
                alt="Shakya Tech Logo" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </div>
            
            <div className="leading-tight flex flex-col justify-center min-w-max">
              <span className="text-base sm:text-lg lg:text-xl font-extrabold text-[#081839] tracking-wide uppercase group-hover:text-blue-700 transition-colors duration-300">
                SHAKYA TECH
              </span>
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-[#081839] tracking-wide uppercase mt-[1px]">
                PROGRAMMING HUB
              </span>
              <p className="text-[8px] sm:text-[9px] text-gray-500 font-medium mt-0.5">
                Learn. Practice. Grow.
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation (Underline Slide Animation) */}
          <nav className="hidden lg:flex items-center justify-center space-x-5 xl:space-x-8 text-[14px] xl:text-[15px] font-bold text-[#081839] flex-shrink-0">
            <Link href="/" className="relative group whitespace-nowrap py-1">
              <span className="group-hover:text-blue-600 transition-colors duration-300">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            
            <Link href="/about" className="relative group whitespace-nowrap py-1">
              <span className="group-hover:text-blue-600 transition-colors duration-300">About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>

            <a href="#" className="relative group whitespace-nowrap py-1">
              <span className="group-hover:text-blue-600 transition-colors duration-300">Courses ▾</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group whitespace-nowrap py-1">
              <span className="group-hover:text-blue-600 transition-colors duration-300">Learning Modes ▾</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group whitespace-nowrap py-1">
              <span className="group-hover:text-blue-600 transition-colors duration-300">Admissions ▾</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group whitespace-nowrap py-1">
              <span className="group-hover:text-blue-600 transition-colors duration-300">Fees</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>

            <a href="#" className="relative group whitespace-nowrap py-1">
              <span className="group-hover:text-blue-600 transition-colors duration-300">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 flex-shrink-0 flex-1">
            {/* 3D Lift Button Effect */}
            <button className="hidden sm:block bg-[#081839] hover:bg-blue-800 text-white px-5 xl:px-7 py-2.5 rounded font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm text-sm whitespace-nowrap">
              Apply Now
            </button>
            
            {/* Hamburger Menu Spin Animation */}
            <button 
              className="lg:hidden text-[#081839] text-2xl focus:outline-none hover:rotate-90 transition-transform duration-300 ease-in-out"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Slide & Fade in effect) */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl z-40 flex flex-col transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-2 text-sm font-bold text-[#081839]">
          {/* Mobile Links Hover Slide Effect */}
          <Link href="/" className="hover:text-blue-600 hover:translate-x-2 transition-all duration-300 py-2 border-b border-gray-50 flex w-full">Home</Link>
          <Link href="/about" className="hover:text-blue-600 hover:translate-x-2 transition-all duration-300 py-2 border-b border-gray-50 flex w-full">About Us</Link>
          <a href="#" className="hover:text-blue-600 hover:translate-x-2 transition-all duration-300 py-2 border-b border-gray-50 flex w-full">Courses ▾</a>
          <a href="#" className="hover:text-blue-600 hover:translate-x-2 transition-all duration-300 py-2 border-b border-gray-50 flex w-full">Learning Modes ▾</a>
          <a href="#" className="hover:text-blue-600 hover:translate-x-2 transition-all duration-300 py-2 border-b border-gray-50 flex w-full">Admissions ▾</a>
          <a href="#" className="hover:text-blue-600 hover:translate-x-2 transition-all duration-300 py-2 border-b border-gray-50 flex w-full">Fees</a>
          <a href="#" className="hover:text-blue-600 hover:translate-x-2 transition-all duration-300 py-2 flex w-full">Contact Us</a>
          
          <button className="bg-[#081839] hover:bg-blue-800 text-white py-3 rounded font-semibold shadow-md mt-4 w-full sm:hidden transition-colors duration-300">
            Apply Now
          </button>
        </nav>
      </div>
    </div>
  );
}