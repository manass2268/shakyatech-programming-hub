import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="w-full font-sans shadow-md">
      {/* Top Bar (Dark Navy) */}
      <div className="bg-[#081839] text-gray-300 text-[11px] py-2 hidden xl:block">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span className="text-yellow-500 font-semibold">🎓 Admissions Open 2025-26</span>
            <span className="text-gray-500">|</span>
            <span>Build Your Skills. Build Your Future.</span>
          </div>
          <div className="flex gap-5 items-center">
            <a href="#" className="hover:text-yellow-400 transition">Student Login</a>
            <a href="#" className="hover:text-yellow-400 transition">Faculty Login</a>
            <a href="#" className="hover:text-yellow-400 transition">Admin Login</a>
            <span className="text-gray-500">|</span>
            <span className="flex items-center gap-1">📞 +91 98765 43210</span>
            <span className="flex items-center gap-1">✉️ info@yourinstitute.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar (White) */}
      <header className="bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* YI text ki jagah Image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
              <Image 
                src="/logo.jpeg"  
                alt="Shakya Tech Logo" 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </div>
            
            <div className="leading-tight flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold text-[#081839] tracking-wide uppercase">
                SHAKYA TECH
              </span>
              <span className="text-sm sm:text-md font-bold text-[#081839] tracking-wide uppercase">
                PROGRAMMING HUB
              </span>
              <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium mt-0.5">
                Learn. Practice. Grow.
              </p>
            </div>
            </div>
          
          {/* Links */}
          <nav className="hidden xl:flex space-x-6 text-[13px] font-bold text-[#081839]">
            <a href="#" className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Courses ▾</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Learning Modes ▾</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Admissions ▾</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Fees</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button className="hidden sm:block bg-[#081839] hover:bg-blue-900 text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded font-semibold transition-all shadow-md text-sm">
              Apply Now
            </button>
            <button className="xl:hidden text-[#081839] text-2xl focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}