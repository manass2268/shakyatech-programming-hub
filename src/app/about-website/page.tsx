"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Zap, Shield, Smartphone, BookOpen, MonitorPlay, UserPlus, 
  IndianRupee, Library, LifeBuoy, Mail, MessageCircle, Phone, 
  Globe, AlertTriangle, MessageSquare, Send, CheckCircle
} from 'lucide-react';

export default function AboutWebsite() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-[#081839] text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <div className="space-y-6">
                <p className="text-yellow-500 font-bold tracking-wider text-sm uppercase">About This Website</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  About This Website
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                  This platform is designed to provide students with a seamless digital experience to explore courses, learning modes, admissions, fees and much more — all in one place.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-blue-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Fast</h4>
                      <p className="text-xs text-gray-400 mt-1">Optimized for speed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-green-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Secure</h4>
                      <p className="text-xs text-gray-400 mt-1">Data protected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-6 h-6 text-yellow-400 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm">Responsive</h4>
                      <p className="text-xs text-gray-400 mt-1">Perfect on any device</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex justify-end relative">
                <div className="w-[500px] h-[320px] bg-gray-900 rounded-t-2xl border-8 border-gray-800 relative shadow-2xl flex flex-col overflow-hidden transform translate-x-12">
                  <div className="h-6 bg-gray-800 flex items-center px-3 gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-white p-4">
                    <div className="flex justify-between items-center border-b pb-2 mb-4">
                      <div className="w-24 h-4 bg-gray-200 rounded"></div>
                      <div className="flex gap-2">
                        <div className="w-8 h-2 bg-gray-200 rounded"></div>
                        <div className="w-8 h-2 bg-gray-200 rounded"></div>
                        <div className="w-8 h-2 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="w-full h-24 bg-blue-50 rounded-lg mb-4"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 bg-gray-100 rounded-md"></div>
                      <div className="h-16 bg-gray-100 rounded-md"></div>
                      <div className="h-16 bg-gray-100 rounded-md"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 right-12 w-[140px] h-[280px] bg-white border-[6px] border-gray-900 rounded-[2rem] shadow-xl overflow-hidden flex flex-col">
                  <div className="h-4 bg-gray-900 w-16 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl z-20"></div>
                  <div className="h-32 bg-[#081839] w-full pt-8 px-3">
                    <div className="w-16 h-3 bg-white/20 rounded mb-2"></div>
                    <div className="w-24 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-2 space-y-2">
                     <div className="h-10 bg-white rounded shadow-sm border border-gray-100"></div>
                     <div className="h-10 bg-white rounded shadow-sm border border-gray-100"></div>
                     <div className="h-10 bg-white rounded shadow-sm border border-gray-100"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.94,136.2,216.5,127,252.88,122.75,288.7,112.5,321.39,56.44Z" fill="#f9fafb"></path>
            </svg>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#081839] mb-4">What This Platform Provides</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Everything students need to explore, understand and connect with the institute effortlessly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#081839] mb-3">Courses</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Explore a wide range of industry-oriented courses tailored for your career growth and skill development.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <MonitorPlay className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#081839] mb-3">Learning Modes</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Choose from Online, Offline, or Hybrid learning modes to perfectly match your schedule and convenience.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <UserPlus className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#081839] mb-3">Admissions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Easy and transparent admission process with dedicated student support at every single step.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <IndianRupee className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#081839] mb-3">Fees Information</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Detailed and transparent information about course fees, payment structures, and available scholarships.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Library className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#081839] mb-3">Resources</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Access study materials, timely updates, important notices, and comprehensive learning resources.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <LifeBuoy className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#081839] mb-3">Student Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">We are here to help you with all your queries, technical assistance, and general guidance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-12 bg-white border-y border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h3 className="text-xl font-bold text-[#081839] mb-2">Technology Behind the Platform</h3>
            <p className="text-sm text-gray-500 mb-8">Modern technologies used to ensure a fast, secure, scalable and best-in-class user experience.</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl border border-gray-300">N</div>
                <span className="text-xs font-semibold text-gray-800">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg className="w-10 h-10 text-[#61DAFB]" viewBox="0 0 118 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59 28C41.9 28 28 41.9 28 59C28 76.1 41.9 90 59 90C76.1 90 90 76.1 90 59C90 41.9 76.1 28 59 28ZM59 82C46.3 82 36 71.7 36 59C36 46.3 46.3 36 59 36C71.7 36 82 46.3 82 59C82 71.7 71.7 82 59 82Z" fill="currentColor"/>
                  <ellipse cx="59" cy="51.5" rx="35.5" ry="14" transform="rotate(30 59 51.5)" stroke="currentColor" strokeWidth="6"/>
                  <ellipse cx="59" cy="51.5" rx="35.5" ry="14" transform="rotate(90 59 51.5)" stroke="currentColor" strokeWidth="6"/>
                  <ellipse cx="59" cy="51.5" rx="35.5" ry="14" transform="rotate(150 59 51.5)" stroke="currentColor" strokeWidth="6"/>
                </svg>
                <span className="text-xs font-semibold text-gray-800">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-[#3178C6] rounded flex items-center justify-center text-white font-bold text-sm">TS</div>
                <span className="text-xs font-semibold text-gray-800">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg className="w-10 h-10 text-[#38B2AC]" viewBox="0 0 64 64" fill="currentColor">
                   <path d="M32 15c-7 0-11 5-11 11s5.5 11 11 11c5.5 0 8-2.5 10.5-5.5 2-2.5 4-5.5 8.5-5.5 7 0 11 5 11 11s-5.5 11-11 11c-5.5 0-8-2.5-10.5-5.5C36.5 28 34.5 25 30 25c-7 0-11 5-11 11s5.5 11 11 11c5.5 0 8-2.5 10.5-5.5C42.5 39 44.5 42 49 42c7 0 11-5 11-11s-5.5-11-11-11c-5.5 0-8 2.5-10.5 5.5C36.5 28 34.5 25 30 25z"/>
                </svg>
                <span className="text-xs font-semibold text-gray-800">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 text-[#2D3748] flex justify-center items-center">
                  <svg viewBox="0 0 48 48" fill="currentColor" className="w-full h-full"><path d="M11.9 44l22.2-12L24 4z"></path></svg>
                </div>
                <span className="text-xs font-semibold text-gray-800">Prisma ORM</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 flex justify-center items-center text-black">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L24 22H0L12 2Z"/></svg>
                </div>
                <span className="text-xs font-semibold text-gray-800">Vercel</span>
              </div>
            </div>
          </div>
        </section>

        {/* DEV & CONNECT SPLIT */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                  <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 border-4 border-blue-50">
                    <span className="text-3xl font-extrabold">MS</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Designed & Developed By</h3>
                    <h2 className="text-3xl font-extrabold text-[#081839] mb-1">Manas Singh</h2>
                    <p className="text-blue-600 font-semibold mb-4">Web Developer & Tech Enthusiast</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      This platform is thoughtfully designed and developed by Manas Singh with a focus on performance, clean UI/UX design, and a seamless user experience.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Clean & Modern UI/UX
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Secure & Reliable
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Performance Optimized
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-500" /> Continuous Improvement
                  </div>
                </div>
              </div>

              <div className="bg-[#081839] p-8 md:p-10 rounded-3xl text-white shadow-xl flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
                <p className="text-gray-400 text-sm mb-8">I am always open to discussing new projects, ideas or helping you with any issues.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a href="mailto:support.mstech4407@gmail.com" className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors group">
                    <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Email</h4>
                      <p className="text-xs text-gray-400">Drop an email</p>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/916307331991" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors group">
                    <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">WhatsApp</h4>
                      <p className="text-xs text-gray-400">+91 63073 31991</p>
                    </div>
                  </a>

                  <a href="tel:+916307331991" className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors group">
                    <div className="w-10 h-10 bg-teal-500/20 text-teal-400 rounded-lg flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Call Me</h4>
                      <p className="text-xs text-gray-400">+91 63073 31991</p>
                    </div>
                  </a>

                  <a href="https://www.linkedin.com/in/manas-singh-84326b226/" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors group">
                    <div className="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">LinkedIn</h4>
                      <p className="text-xs text-gray-400">Connect with me</p>
                    </div>
                  </a>

                  <a href="https://github.com/manass2268" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors group">
                    <div className="w-10 h-10 bg-gray-500/20 text-gray-300 rounded-lg flex items-center justify-center group-hover:bg-gray-700 group-hover:text-white transition-colors">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">GitHub</h4>
                      <p className="text-xs text-gray-400">Check my projects</p>
                    </div>
                  </a>

                  <a href="https://manass2268.github.io/manas-portfolio/" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-4 transition-colors group">
                    <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-lg flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Portfolio</h4>
                      <p className="text-xs text-gray-400">View my website</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FORM & SUPPORT SPLIT */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
              
               <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm">
                <h2 className="text-2xl font-bold text-[#081839] mb-6">Send a Message</h2>
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Your Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Your Email</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                        placeholder="support.mstech4407@gmail.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Subject</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                      placeholder="How can I help you?"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Your Message</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`bg-[#081839] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-900 transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-6">
                
                <div className="bg-red-50 border border-red-100 p-8 rounded-3xl flex flex-col items-start justify-center h-full">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-red-900 mb-2">Found an Issue?</h3>
                  <p className="text-red-800/80 text-sm mb-6 leading-relaxed">
                    Help us improve! Report any bug, broken link, or technical issue you face on this website.
                  </p>
                  <a 
                    href="mailto:support.mstech4407@gmail.com?subject=Website Bug Report"
                    className="bg-white text-red-600 border border-red-200 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    Report a Website Issue
                  </a>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl flex flex-col items-start justify-center h-full">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Feedback Welcome</h3>
                  <p className="text-emerald-800/80 text-sm mb-6 leading-relaxed">
                    Your feedback helps us make this platform better and create a flawless experience for students.
                  </p>
                  <a 
                    href="mailto:support.mstech4407@gmail.com?subject=Website Feedback"
                    className="bg-white text-emerald-600 border border-emerald-200 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    Share Your Feedback
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}