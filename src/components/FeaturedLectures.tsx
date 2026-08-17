"use client";
import React from 'react';
import Link from 'next/link';

// Yahan hum strictly define kar rahe hain ki kaunsi videos dikhani hain
const curatedLectures = [
  {
    id: 'demo-1',
    title: 'C Programming - Introduction & Basics',
    instructor: 'Ashwani Shakya',
    duration: '45 Mins',
    isFree: true,
    // Agar Free hai, toh hum YouTube ka embed link use karenge
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE', 
    thumbnail: 'https://placehold.co/600x340/081839/FFD700?text=C+Programming+Demo',
  },
  {
    id: 'premium-1',
    title: 'Advanced Python - Data Structures Masterclass',
    instructor: 'Ashwani Shakya',
    duration: '1.5 Hours',
    isFree: false, // Yeh false hai, matlab yeh LOCKED rahega
    thumbnail: 'https://placehold.co/600x340/081839/FFFFFF?text=Python+Masterclass',
  }
];

export default function FeaturedLectures() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#081839] mb-3">
              Watch & Learn
            </h2>
            <p className="text-gray-600 max-w-2xl text-sm md:text-base">
              Start your learning journey with our free preview masterclasses. Enroll in full courses to unlock the complete curriculum.
            </p>
          </div>
          <Link href="/courses" className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-2 text-sm md:text-base shrink-0">
            View All Courses <span>→</span>
          </Link>
        </div>

        {/* Lectures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {curatedLectures.map((lecture) => (
            <div key={lecture.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              
              {/* Thumbnail / Video Area */}
              <div className="relative aspect-video w-full bg-gray-900 overflow-hidden">
                
                {lecture.isFree ? (
                  // FREE LECTURE: Yahan YouTube video embed hogi
                  <div className="absolute inset-0">
                    {/* Placeholder for now. Jab aap video link dalenge, tab iframe use karenge.
                        Abhi ke liye ek visual play button dikha rahe hain. */}
                     <img src={lecture.thumbnail} alt={lecture.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all cursor-pointer">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <span className="text-white text-2xl ml-1">▶</span>
                        </div>
                     </div>
                     <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                       Free Preview
                     </div>
                  </div>
                ) : (
                  // PREMIUM LECTURE: Locked state with blur effect
                  <div className="absolute inset-0 group-hover:blur-sm transition-all duration-300">
                    <img src={lecture.thumbnail} alt={lecture.title} className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-[#081839]/60 flex flex-col items-center justify-center">
                       <span className="text-4xl mb-2 text-yellow-500 drop-shadow-lg">🔒</span>
                       <span className="text-white font-bold text-lg drop-shadow-md">Premium Content</span>
                    </div>
                  </div>
                )}
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-sm z-10">
                  {lecture.duration}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold text-[#081839] mb-2 leading-tight">
                  {lecture.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium mb-6 flex items-center gap-2">
                  <span className="text-blue-600">👤</span> Instructor: {lecture.instructor}
                </p>

                {/* Call to Action Button */}
                <div className="mt-auto">
                  {lecture.isFree ? (
                    <button className="w-full py-3 bg-blue-50 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                      Watch Lecture
                    </button>
                  ) : (
                    <button className="w-full py-3 bg-yellow-500 text-[#081839] font-bold rounded-lg hover:bg-yellow-400 hover:shadow-md transition-all duration-300 flex justify-center items-center gap-2">
                      <span>Enroll to Unlock</span>
                      <span className="text-lg leading-none">🔓</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}