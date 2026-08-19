"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const toggleMobileDropdown = (dropdownName: string) => {
    if (openMobileDropdown === dropdownName) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(dropdownName);
    }
  };

  return (
    <div className="w-full font-sans shadow-md relative">
      
      {/* Top Bar - Ultra Wide Ready */}
      <div className="hidden bg-[#081839] text-gray-300 text-[11px] py-2">
        {/* Changed max-w-7xl to max-w-[1920px] and added 2xl:px-16 */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 flex justify-between items-center">
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

      {/* Main Header - Ultra Wide Ready */}
      <header className="bg-white sticky top-0 z-50 w-full overflow-visible">
        {/* Changed max-w-7xl to max-w-[1920px] and added 2xl:px-16 */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 py-3 lg:py-4 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 lg:gap-3 2xl:gap-4 shrink-0 justify-start group cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 relative flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo.jpeg" 
                alt="Shakya Tech Logo" 
                width={56} 
                height={56} 
                className="object-contain"
              />
            </div>
            
            <div className="leading-tight flex flex-col justify-center min-w-max">
              <span className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-extrabold text-[#081839] tracking-wide uppercase group-hover:text-blue-700 transition-colors duration-300 whitespace-nowrap">
                SHAKYA TECH
              </span>
              <span className="text-[10px] sm:text-[11px] lg:text-[12px] 2xl:text-[13px] font-bold text-[#081839] tracking-wide uppercase mt-[1px] whitespace-nowrap">
                PROGRAMMING HUB
              </span>
              <p className="text-[8px] sm:text-[9px] 2xl:text-[10px] text-gray-500 font-medium mt-0.5 whitespace-nowrap">
                Learn. Practice. Grow.
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation - Added 2xl:space-x-12 for ultra-wide spreading */}
          <nav className="hidden lg:flex items-center justify-center space-x-5 xl:space-x-8 2xl:space-x-12 text-[14px] xl:text-[15px] 2xl:text-[16px] font-bold text-[#081839] shrink-0">
            
            <Link href="/" className={`relative group whitespace-nowrap py-1 ${isActive('/') ? 'text-blue-600' : ''}`}>
              <span className="group-hover:text-blue-600 transition-colors duration-300">Home</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            
            <Link href="/about" className={`relative group whitespace-nowrap py-1 ${isActive('/about') ? 'text-blue-600' : ''}`}>
              <span className="group-hover:text-blue-600 transition-colors duration-300">About Us</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <div className="relative group py-1">
              <button className="flex items-center gap-1 group-hover:text-blue-600 transition-colors duration-300">
                Courses <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link href="/courses/c" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">C Programming</Link>
                <Link href="/courses/cpp" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">C++ Programming</Link>
                <Link href="/courses/java" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Java Programming</Link>
                <Link href="/courses/python" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Python</Link>
                <Link href="/courses/web" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Web Development</Link>
              </div>
            </div>

            <Link href="/#watch-free" className="relative group whitespace-nowrap py-1">
              <span className="group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-1">
                <span className="text-red-500">▶</span> Watch Free
              </span>
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out w-0 group-hover:w-full"></span>
            </Link>

            <div className="relative group py-1">
              <button className="flex items-center gap-1 group-hover:text-blue-600 transition-colors duration-300">
                Learning Modes <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-white border border-gray-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link href="/modes/online" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Online Mode</Link>
                <Link href="/modes/offline" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Offline Mode</Link>
                <Link href="/modes/hybrid" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Hybrid Mode</Link>
              </div>
            </div>

            <div className="relative group py-1">
              <button className="flex items-center gap-1 group-hover:text-blue-600 transition-colors duration-300">
                Admissions <span className="text-[10px] transition-transform duration-300 group-hover:rotate-180">▼</span>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white border border-gray-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link href="/admissions/apply" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Apply Now</Link>
                <Link href="/admissions/process" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">Admission Process</Link>
                <Link href="/admissions/faqs" className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">FAQs</Link>
              </div>
            </div>

            <Link href="/fees" className={`relative group whitespace-nowrap py-1 ${isActive('/fees') ? 'text-blue-600' : ''}`}>
              <span className="group-hover:text-blue-600 transition-colors duration-300">Fees</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${isActive('/fees') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>

            <Link href="/contact" className={`relative group whitespace-nowrap py-1 ${isActive('/contact') ? 'text-blue-600' : ''}`}>
              <span className="group-hover:text-blue-600 transition-colors duration-300">Contact Us</span>
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
            
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 shrink-0">
            {/* Added 2xl sizing for the button */}
            <button className="hidden sm:block bg-[#081839] hover:bg-blue-800 text-white px-5 xl:px-7 2xl:px-8 py-2.5 2xl:py-3 rounded font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm text-sm 2xl:text-base whitespace-nowrap">
              Apply Now
            </button>
            
            <button 
              className="lg:hidden text-[#081839] text-2xl focus:outline-none hover:rotate-90 transition-transform duration-300 ease-in-out"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl z-40 flex flex-col transition-all duration-300 origin-top overflow-y-auto ${
          isMobileMenuOpen ? 'max-h-[85vh] opacity-100 scale-y-100 pb-4' : 'max-h-0 opacity-0 scale-y-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-1 text-sm font-bold text-[#081839]">
          
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-blue-600 transition-all duration-300 py-3 border-b border-gray-100 flex w-full ${isActive('/') ? 'text-blue-600 translate-x-2' : 'hover:translate-x-2'}`}>Home</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-blue-600 transition-all duration-300 py-3 border-b border-gray-100 flex w-full ${isActive('/about') ? 'text-blue-600 translate-x-2' : 'hover:translate-x-2'}`}>About Us</Link>

          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleMobileDropdown('courses')}
              className="w-full flex items-center justify-between py-3 hover:text-blue-600 transition-colors outline-none"
            >
              <span>Courses</span>
              <span className={`transition-transform duration-300 ${openMobileDropdown === 'courses' ? 'rotate-180 text-blue-600' : ''}`}>▼</span>
            </button>
            <div className={`flex flex-col bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ${openMobileDropdown === 'courses' ? 'max-h-[300px] opacity-100 mb-2 border border-gray-100' : 'max-h-0 opacity-0'}`}>
              <Link href="/courses/c" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">C Programming</Link>
              <Link href="/courses/cpp" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">C++ Programming</Link>
              <Link href="/courses/java" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">Java Programming</Link>
              <Link href="/courses/python" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">Python</Link>
              <Link href="/courses/web" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">Web Development</Link>
            </div>
          </div>

          <Link href="/#watch-free" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition-all duration-300 py-3 border-b border-gray-100 flex w-full hover:translate-x-2 items-center gap-2">
            <span className="text-red-500">▶</span> Watch Free
          </Link>

          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleMobileDropdown('modes')}
              className="w-full flex items-center justify-between py-3 hover:text-blue-600 transition-colors outline-none"
            >
              <span>Learning Modes</span>
              <span className={`transition-transform duration-300 ${openMobileDropdown === 'modes' ? 'rotate-180 text-blue-600' : ''}`}>▼</span>
            </button>
            <div className={`flex flex-col bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ${openMobileDropdown === 'modes' ? 'max-h-[200px] opacity-100 mb-2 border border-gray-100' : 'max-h-0 opacity-0'}`}>
              <Link href="/modes/online" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">Online Mode</Link>
              <Link href="/modes/offline" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">Offline Mode</Link>
              <Link href="/modes/hybrid" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">Hybrid Mode</Link>
            </div>
          </div>

          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleMobileDropdown('admissions')}
              className="w-full flex items-center justify-between py-3 hover:text-blue-600 transition-colors outline-none"
            >
              <span>Admissions</span>
              <span className={`transition-transform duration-300 ${openMobileDropdown === 'admissions' ? 'rotate-180 text-blue-600' : ''}`}>▼</span>
            </button>
            <div className={`flex flex-col bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 ${openMobileDropdown === 'admissions' ? 'max-h-[200px] opacity-100 mb-2 border border-gray-100' : 'max-h-0 opacity-0'}`}>
              <Link href="/admissions/apply" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">Apply Now</Link>
              <Link href="/admissions/process" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">Admission Process</Link>
              <Link href="/admissions/faqs" onClick={() => setIsMobileMenuOpen(false)} className="pl-6 py-3 text-sm font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50/50">FAQs</Link>
            </div>
          </div>

          <Link href="/fees" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-blue-600 transition-all duration-300 py-3 border-b border-gray-100 flex w-full ${isActive('/fees') ? 'text-blue-600 translate-x-2' : 'hover:translate-x-2'}`}>Fees</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`hover:text-blue-600 transition-all duration-300 py-3 flex w-full ${isActive('/contact') ? 'text-blue-600 translate-x-2' : 'hover:translate-x-2'}`}>Contact Us</Link>
          
          <button className="bg-[#081839] hover:bg-blue-800 text-white py-3.5 rounded font-semibold shadow-md mt-6 w-full sm:hidden transition-colors duration-300">
            Apply Now
          </button>
        </nav>
      </div>
    </div>
  );
}