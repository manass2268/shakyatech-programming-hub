import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#081839] text-white pt-16 pb-6 border-t-[6px] border-yellow-500 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Logo (Text Only) & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="leading-tight">
                <h4 className="text-base font-extrabold tracking-wide uppercase">DEMO ACADEMY</h4>
                <p className="text-[9px] text-gray-400 uppercase">Learning Platform</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              We are committed to providing quality education with practical knowledge and help students achieve their goals in the IT industry.
            </p>
            
            <div className="flex gap-3">
              {/* Dummy Social Links */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 5.5h-5v15h5v-15zm7.982 0h-4.968v15h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-1.155z"/>
                </svg>
              </a>
              
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Courses</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Learning Modes</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Fees Structure</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Admissions</a></li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Courses</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-yellow-400 transition">C Programming</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">C++ Programming</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Java Programming</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Python Programming</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">O Level (IT)</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Web Development</a></li>
            </ul>
          </div>

          {/* Column 4: Learning & Support */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Learning Modes</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium mb-6">
              <li><a href="#" className="hover:text-yellow-400 transition">Online Learning</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Offline Learning</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Hybrid Learning</a></li>
            </ul>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-yellow-400 transition">Student Login</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-xs text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>123, ABC Block,<br />Demo City, Country - 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a 
                  href="#" 
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">✉️</span>
                <a 
                  href="#" 
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  info@demo-academy.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">🕒</span>
                <span className="leading-relaxed">
                  <span className="text-white font-semibold">Support:</span> 9:00 AM - 5:00 PM<br />
                  <span className="text-white font-semibold">Helpdesk:</span>{' '}
                  <a 
                    href="#" 
                    className="hover:text-yellow-400 transition cursor-pointer font-bold underline decoration-yellow-500/50 underline-offset-2"
                  >
                    24/7 Available
                  </a>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Copyright */}
          <div className="text-[11px] text-gray-500 font-medium text-center md:text-left">
            <p>© 2026 Demo Academy. All Rights Reserved.</p>
          </div>

          {/* Links Section */}
          <div className="text-[11px] text-gray-500 font-medium flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-4">
            
            {/* Developer/About Link */}
            <Link href="/about-website" className="text-grey-500 font-bold hover:text-yellow-400 transition tracking-wide">
              About Website
            </Link>
            <span className="hidden md:inline text-gray-700">|</span>
            
            <a href="#" className="text-grey-500 font-bold hover:text-yellow-400 transition tracking-wide">Terms & Conditions</a>
            <span className="hidden md:inline text-gray-700">|</span>
            
            <a href="#" className="text-grey-500 font-bold hover:text-yellow-400 transition tracking-wide">Privacy Policy</a>
            
          </div>
        </div>

      </div>
    </footer>
  );
}