"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Lightbulb, Award, Users, Laptop, BookOpen, CheckCircle2, ChevronRight, Star, PlayCircle } from 'lucide-react';
import Link from 'next/link';

// Array for all 15 images
const allGalleryImages = Array.from({ length: 15 }, (_, i) => `/assests/img${i + 1}.jpeg`);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner with Modern Styling */}
      <div className="relative bg-[#081839] py-24 md:py-32 overflow-hidden border-b-8 border-yellow-500">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/30 backdrop-blur-sm">
            <Star className="w-3 h-3 text-yellow-400" /> Discover ShakyaTech
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Empowering the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-yellow-400">Next Generation of Coders</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Learn, Practice, and Grow with Kanpur's most trusted programming hub. We bridge the gap between academic theory and real-world industry demands.
          </p>
        </div>
      </div>

      <main className="flex-grow w-full">
        
        {/* Introduction Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-gray-100">
                  <Image 
                    src="/assests/img6.jpeg" 
                    alt="ShakyaTech Institute Environment" 
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
                    priority
                  />
                </div>
                
                <div className="absolute -bottom-6 -left-6 md:-left-10 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-xl shadow-blue-900/10 border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#081839]">5000+</h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Students Trained</p>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-yellow-400/90 rounded-3xl z-0 hidden md:block"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl z-0"></div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-blue-600"></span> Welcome to ShakyaTech
                </h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#081839] tracking-tight mb-6 leading-tight">
                  Building IT Careers from the Ground Up
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Located in the heart of Kalyanpur, Kanpur, <strong>ShakyaTech Programming Hub</strong> is a premier IT training institute dedicated to providing top-notch education in software development. 
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you are a beginner taking your first steps in coding or a professional looking to upgrade your skills, our hands-on approach ensures you gain the practical knowledge required to succeed in today's competitive tech industry.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
                    <span className="text-[#081839] font-bold text-sm">100% Practical Training</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <CheckCircle2 className="text-green-500 w-6 h-6 shrink-0" />
                    <span className="text-[#081839] font-bold text-sm">Industry Expert Faculty</span>
                  </div>
                </div>

                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:-translate-y-1">
                  Enquire Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Video Tour Section (NEW: Contains vid1.mp4 and vid2.mp4) */}
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5" /> Experience It Live
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Campus Video Tour
              </h3>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Take a virtual walk through our classrooms, labs, and see our vibrant student community in action.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="bg-white/5 p-3 rounded-3xl border border-white/10 shadow-2xl hover:border-blue-500/50 transition-colors duration-500">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                  <video 
                    src="/assests/vid1.mp4" 
                    controls 
                    muted 
                    className="w-full h-full object-contain"
                    poster="/assests/img1.jpeg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="bg-white/5 p-3 rounded-3xl border border-white/10 shadow-2xl hover:border-yellow-500/50 transition-colors duration-500">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                  <video 
                    src="/assests/vid2.mp4" 
                    controls 
                    muted 
                    className="w-full h-full object-contain"
                    poster="/assests/img2.jpeg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              {/* Mission */}
              <div className="bg-white rounded-3xl p-10 shadow-xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0 transition-transform duration-500 group-hover:scale-125"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/30">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#081839] mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To deliver high-quality, accessible, and practical technical education. We strive to simplify complex programming concepts and equip students with the exact skills that IT companies demand today.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-3xl p-10 shadow-xl shadow-blue-900/5 border border-gray-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/10 transition-shadow duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-full z-0 transition-transform duration-500 group-hover:scale-125"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/30">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-[#081839] mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To be the most trusted and student-centric educational platform in Uttar Pradesh, fostering an environment where innovation meets learning, and every student transforms into a confident tech professional.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FULL GALLERY SECTION (Masonry Layout for all 15 Images) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Complete Campus View</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#081839] tracking-tight">
                Our Learning Space
              </h3>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">Explore the infrastructure, modern labs, and the engaging environment we provide for our students.</p>
            </div>

            {/* Masonry Grid (Prevents Cropping, adjusts according to image aspect ratio) */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {allGalleryImages.map((src, index) => (
                <div key={index} className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-lg border-[3px] border-gray-100 bg-gray-50 group">
                  <Image 
                    src={src} 
                    alt={`Campus facility ${index + 1}`} 
                    width={500}
                    height={400} // This is just for aspect ratio calculation by Next.js
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[#081839] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-2">
                <span className="w-8 h-0.5 bg-yellow-400"></span> Why ShakyaTech? <span className="w-8 h-0.5 bg-yellow-400"></span>
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                What Sets Us Apart
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-[#081839] transition-colors duration-300">
                  <Laptop className="w-8 h-8 text-yellow-400 group-hover:text-[#081839]" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Modern Infrastructure</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Fully equipped labs with high-speed internet and the latest software setups for seamless coding.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-400 group-hover:text-[#081839] transition-colors duration-300">
                  <Users className="w-8 h-8 text-blue-400 group-hover:text-[#081839]" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Expert Mentors</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Learn directly from experienced developers who know what the IT industry actually needs.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-400 group-hover:text-[#081839] transition-colors duration-300">
                  <BookOpen className="w-8 h-8 text-green-400 group-hover:text-[#081839]" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Flexible Modes</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Choose between Offline, Online, or Hybrid modes based on your comfort and schedule.</p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-400 group-hover:text-[#081839] transition-colors duration-300">
                  <Award className="w-8 h-8 text-purple-400 group-hover:text-[#081839]" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">Valid Certifications</h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">Get an industry-recognized certificate upon completion to boost your resume and LinkedIn profile.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}