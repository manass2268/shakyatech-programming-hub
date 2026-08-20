import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Naya import

export default function Footer() {
  return (
    <footer className="bg-[#081839] text-white pt-16 pb-6 border-t-[6px] border-yellow-500 font-sans">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 relative flex items-center justify-center bg-white rounded-full p-1">
                <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="object-contain rounded-full" />
              </div>
              <div className="leading-tight">
                <h4 className="text-base font-extrabold tracking-wide uppercase">SHAKYA TECH</h4>
                <p className="text-[9px] text-gray-400 uppercase">Programming Hub</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              We are committed to providing quality education with practical knowledge and help students achieve their goals in the IT industry.
            </p>
            
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/ashwani-shakya-0aa5b11a7/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 5.5h-5v15h5v-15zm7.982 0h-4.968v15h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-1.155z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/shakya_ashwani1/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@shakyatechprogramminghub7150" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a href="https://t.me/TrickyComputer" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition pl-[1px]">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
              {/* About Us ko connect kiya gaya hai */}
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
                <span>Kalyanpur,<br />Kanpur Nagar,Uttar Pradesh, India - 208001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a 
                  href="tel:+917007627081" 
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  +91 70076 27081
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">✉️</span>
                <a 
                  href="mailto:shakyaashwani906@gmail.com" 
                  className="hover:text-yellow-400 transition cursor-pointer"
                >
                  shakyaashwani906@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">🕒</span>
                <span className="leading-relaxed">
                  <span className="text-white font-semibold">Call:</span> 5:00 PM - 9:00 PM<br />
                  <span className="text-white font-semibold">WhatsApp:</span>{' '}
                  <a 
                    href="https://wa.me/917007627081" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-yellow-400 transition cursor-pointer font-bold underline decoration-yellow-500/50 underline-offset-2"
                  >
                    24/7 Available (Click to chat)
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
            <p>© 2026 ShakyaTech Programming Hub. All Rights Reserved.</p>
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
            <span className="hidden md:inline text-gray-700">|</span>
            
            {/* Support/Bug Link */}
      
            
          </div>
        </div>

      </div>
    </footer>
  );
}