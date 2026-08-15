import React from 'react';
import Image from 'next/image';

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
            {/* Social Icons Placeholder */}
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">f</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">in</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">ig</a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-[#081839] transition">yt</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
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
                <span>123, Education Street,<br />Knowledge City, India - 208001</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <span>+91 70076 27081</span>
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
                  <span className="text-white font-semibold">WhatsApp:</span> 24/7 Available
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500 font-medium">
            © 2026 ShakyaTech Programming Hub. All Rights Reserved.
          </p>
          <div className="text-[11px] text-gray-500 font-medium space-x-4">
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}