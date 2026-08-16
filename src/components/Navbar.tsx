"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Naya import

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full font-sans shadow-md relative">
      <div className="hidden bg-[#081839] text-gray-300 text-[11px] py-2">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span className="text-yellow-500 font-semibold">🎓 Admissions Open 2026-27</span>
            <span className="text-gray-500">|</span>
            <span>Build Your Skills. Build Your Future.</span>
          </div>
          <div className="flex gap-5 items-center">
            <span className="flex items-center gap-1">📞 +91 70076 27081</span>
            <span className="flex items-center gap-1">✉️ shakyaashwani906@gmail.com</span>
          </div>
        </div>
      </div>

      <header className="bg-white sticky top-0 z-50 w-full overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-2 lg:gap-3 flex-shrink-0 flex-1 justify-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center flex-shrink-0">
              <Image 
                src="/logo.jpeg" 
                alt="Shakya Tech Logo" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </div>
            
            <div className="leading-tight flex flex-col justify-center min-w-max">
              <span className="text-base sm:text-lg lg:text-xl font-extrabold text-[#081839] tracking-wide uppercase">
                SHAKYA TECH
              </span>
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-[#081839] tracking-wide uppercase mt-[1px]">
                PROGRAMMING HUB
              </span>
              <p className="text-[8px] sm:text-[9px] text-gray-500 font-medium mt-0.5">
                Learn. Practice. Grow.
              </p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center justify-center space-x-5 xl:space-x-8 text-[14px] xl:text-[15px] font-bold text-[#081839] flex-shrink-0">
            <Link href="/" className="hover:text-blue-600 transition-colors whitespace-nowrap">Home</Link>
            {/* About Us ko connect kiya gaya hai */}
            <Link href="/about" className="hover:text-blue-600 transition-colors whitespace-nowrap">About Us</Link>
            <a href="#" className="hover:text-blue-600 transition-colors whitespace-nowrap">Courses ▾</a>
            <a href="#" className="hover:text-blue-600 transition-colors whitespace-nowrap">Learning Modes ▾</a>
            <a href="#" className="hover:text-blue-600 transition-colors whitespace-nowrap">Admissions ▾</a>
            <a href="#" className="hover:text-blue-600 transition-colors whitespace-nowrap">Fees</a>
            <a href="#" className="hover:text-blue-600 transition-colors whitespace-nowrap">Contact Us</a>
          </nav>

          <div className="flex items-center justify-end gap-3 flex-shrink-0 flex-1">
            <button className="hidden sm:block bg-[#081839] hover:bg-blue-900 text-white px-5 xl:px-7 py-2.5 rounded font-semibold transition-all shadow-md text-sm whitespace-nowrap">
              Apply Now
            </button>
            <button 
              className="lg:hidden text-[#081839] text-2xl focus:outline-none transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl z-40 flex flex-col">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-bold text-[#081839]">
            <Link href="/" className="hover:text-blue-600 pb-2 border-b border-gray-100">Home</Link>
            {/* Mobile Menu mein About Us ko connect kiya gaya hai */}
            <Link href="/about" className="hover:text-blue-600 pb-2 border-b border-gray-100">About Us</Link>
            <a href="#" className="hover:text-blue-600 pb-2 border-b border-gray-100">Courses ▾</a>
            <a href="#" className="hover:text-blue-600 pb-2 border-b border-gray-100">Learning Modes ▾</a>
            <a href="#" className="hover:text-blue-600 pb-2 border-b border-gray-100">Admissions ▾</a>
            <a href="#" className="hover:text-blue-600 pb-2 border-b border-gray-100">Fees</a>
            <a href="#" className="hover:text-blue-600 pb-2">Contact Us</a>
            
            <button className="bg-[#081839] text-white py-3 rounded font-semibold shadow-md mt-2 w-full sm:hidden">
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}