"use client";
import React from 'react';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'C Programming',
    duration: '3 Months',
    level: 'Beginner',
    // Original C Logo (Blue Hexagon with white C)
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#00599C" d="M117.5 33.5l-53.1-30.7c-2.4-1.4-5.4-1.4-7.8 0L3.5 33.5c-2.4 1.4-3.9 4-3.9 6.8v61.4c0 2.8 1.5 5.4 3.9 6.8l53.1 30.7c2.4 1.4 5.4 1.4 7.8 0l53.1-30.7c2.4-1.4 3.9-4 3.9-6.8V40.3c0-2.8-1.5-5.4-3.9-6.8z"/>
        <text x="64" y="85" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="#FFF" textAnchor="middle">C</text>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'C++ Programming',
    duration: '3 Months',
    level: 'Intermediate',
    // Original C++ Logo (Blue Hexagon with white C++)
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#00599C" d="M117.5 33.5l-53.1-30.7c-2.4-1.4-5.4-1.4-7.8 0L3.5 33.5c-2.4 1.4-3.9 4-3.9 6.8v61.4c0 2.8 1.5 5.4 3.9 6.8l53.1 30.7c2.4 1.4 5.4 1.4 7.8 0l53.1-30.7c2.4-1.4 3.9-4 3.9-6.8V40.3c0-2.8-1.5-5.4-3.9-6.8z"/>
        <text x="64" y="80" fontFamily="Arial, sans-serif" fontSize="45" fontWeight="bold" fill="#FFF" textAnchor="middle">C++</text>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Java Programming',
    duration: '4 Months',
    level: 'Intermediate',
    // Original Java Logo (Coffee Cup) - Fixed SVG rendering
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#E76F00" d="M81.6 72.8c-2.1-1.3-4.5-2-6.9-2-5.7 0-11 3.5-13.8 8.7-2.6 4.7-2.9 10.3-.9 15.3 1.5 3.8 4.4 7 8.3 8.7 3.9 1.8 8.4 1.9 12.3.2 3.8-1.7 6.8-4.9 8.3-8.8 1.9-5.1 1.6-10.8-1-15.5-1.5-2.7-3.7-5-6.3-6.6zm-17 19.3c-2.3-4.1-1-9.4 3.1-11.7 1.4-.8 3.1-1.2 4.7-1.2 2.7 0 5.3 1.3 6.9 3.5 2 2.8 2.4 6.5.9 9.6-1.5 3.2-4.5 5.6-8 6.4-3.5.7-7.2-.2-9.9-2.6-.9-.8-1.8-1.9-2.4-3.1-2.9-5.1 1-11.6 6.1-14.5.3-.2.7-.3 1.1-.5l.4 3.6c-2.5 1.1-4 3.8-3.4 6.5.6 2.7 2.9 4.8 5.7 4.9 2.7.2 5.3-1.6 6.3-4.2 1-2.6.2-5.5-2-7.2-2.1-1.7-5.1-1.9-7.4-.5l-.8-3.5c3.2-1.9 7.2-1.6 10 1 2.8 2.5 4 6.5 2.8 10.1s-4 6.4-7.6 7.4c-3.6.9-7.5 0-10.1-2.5-2.6-2.5-3.8-6.3-3.1-9.9.5-2.8 2.4-5.2 5-6.4l-.4-3.5zm27.8-11.4c-1.3-.9-2.9-1.3-4.5-1.3-3 0-5.9 1.6-7.4 4.3-1.4 2.4-1.7 5.3-.7 7.9 1.1 2.8 3.5 4.9 6.4 5.6 3 .8 6.2.2 8.6-1.7 2.2-1.8 3.5-4.4 3.8-7.2.2-2.8-1-5.5-3-7.3-1-1.1-2.3-2-3.8-2.6l-1.3 3.5c1.4.5 2.6 1.4 3.5 2.5 1.6 2.1 2.2 4.9 1.5 7.4s-2.8 4.6-5.4 5.3c-2.6.7-5.4-.1-7.4-2-1.9-1.9-2.7-4.7-2-7.3s2.4-4.8 5-5.6c2.5-.8 5.4-.1 7.4 1.8.8.8 1.4 1.8 1.8 2.8l3.4-1.4c-.6-1.5-1.5-2.8-2.7-3.9-2-1.9-4.7-2.9-7.5-2.8z"/>
        <path fill="#5382A1" d="M72.2 21.6c-4.4 1.4-8.1 4.5-10.2 8.7-2.2 4.3-2.6 9.4-1 13.9 1.5 4.3 4.6 8 8.6 10.3 4 2.2 8.7 2.8 13.1 1.7 4.5-1.2 8.3-4 10.7-8 2.4-4.1 3-9 .1-13.6-2.1-3.3-5.3-5.8-9.1-7.1-3.6-1.2-7.6-1-11.1.5l1.3 3.7c3.1-1.3 6.6-1.5 9.8-.5 3.3 1 6.1 3.2 7.8 6.1 1.8 3.1 2.2 6.8.9 10-1.2 3.3-3.8 6-7 7.4s-6.8 1.6-10.1.5c-3.3-1.1-6-3.6-7.5-6.8-1.5-3.2-1.6-6.9-.2-10.2 1.4-3.3 4.1-5.9 7.4-7.1l1.4-3.7z"/>
        <path fill="#E76F00" d="M47.7 58.7c-3.1.6-6.1 2-8.5 4.1-2.4 2-4.1 4.7-5 7.7-.8 2.9-.8 6 0 8.9.8 2.9 2.4 5.6 4.7 7.6 2.3 2 5.1 3.4 8.2 4 3 .6 6.2.2 9.1-1 2.8-1.2 5.3-3.1 7-5.5 1.8-2.4 2.7-5.3 2.7-8.3s-1-5.9-2.7-8.3c-1.8-2.4-4.2-4.3-7-5.5-2.8-1.1-5.9-1.5-8.9-1-2.9.5-5.7 1.8-8 3.6-2.2 1.8-3.9 4.2-4.8 6.9-.9 2.8-.9 5.8.1 8.5l3.8-1.2c-.8-2.2-.8-4.6-.2-6.8.6-2.2 1.9-4.2 3.6-5.6 1.8-1.4 4-2.3 6.3-2.6 2.3-.3 4.6.1 6.7 1.1s3.8 2.6 5 4.6c1.3 2.1 1.9 4.5 1.9 6.9 0 2.4-.7 4.8-1.9 6.9s-2.9 3.7-5 4.6c-2.1 1-4.5 1.3-6.8 1s-4.5-1.2-6.3-2.7c-1.8-1.4-3.1-3.4-3.7-5.6-.6-2.2-.5-4.6.2-6.8l-3.8-1.2c-.6 2.1-.8 4.3-.5 6.5.3 2.1 1.1 4.2 2.3 6 1.2 1.9 2.8 3.4 4.7 4.6 1.9 1.1 4.1 1.8 6.3 2.1 2.2.3 4.5 0 6.6-.7s4-2 5.6-3.6c1.6-1.6 2.8-3.6 3.5-5.8.7-2.1.8-4.4.5-6.6-.3-2.2-1.1-4.2-2.3-6-1.2-1.9-2.8-3.4-4.7-4.6-1.9-1.1-4.1-1.8-6.3-2-2.3-.3-4.6.1-6.7.7z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Python Programming',
    duration: '3 Months',
    level: 'Beginner',
    // Original Python Logo (Blue & Yellow Snakes)
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#3776AB" d="M64 12.3c-25.9 0-24.3 11.2-24.3 11.2l.1 11.5h24.7v3.5H35.4s-16.1-1.9-16.1 23.4c0 25.3 14 24.5 14 24.5h6.1v-11.7s-.2-13.8 13.5-13.8h25.4s13-.1 13-13.4V24.5s2.2-12.2-27.3-12.2zM53.1 23c2.7 0 4.8 2.2 4.8 4.8 0 2.7-2.2 4.8-4.8 4.8s-4.8-2.2-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8z"/>
        <path fill="#FFD43B" d="M64 115.7c25.9 0 24.3-11.2 24.3-11.2l-.1-11.5H63.5v-3.5h29.1s16.1 1.9 16.1-23.4c0-25.3-14-24.5-14-24.5h-6.1v11.7s.2 13.8-13.5 13.8H49.6s-13 .1-13 13.4v22.8s-2.2 12.2 27.4 12.2zm10.9-10.7c-2.7 0-4.8-2.2-4.8-4.8 0-2.7 2.2-4.8 4.8-4.8s4.8 2.2 4.8 4.8c0 2.7-2.1 4.8-4.8 4.8z"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'O Level (IT)',
    duration: '1 Year',
    level: 'Beginner',
    // Professional IT Certification Icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00599C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Web Development',
    duration: '3 Months',
    level: 'Intermediate',
    // Original React/Web Dev Logo Style
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <path fill="#61DAFB" d="M64 120.3c-29.2 0-54.8-9.6-54.8-21.4 0-11 23.4-20.2 50.8-21.3V64h.1c-12.7-3-24.4-7.5-33.8-13-17.7-10.4-25.2-22.3-25.2-24.2 0-2 .8-4.3 3.3-7.5 7.1-9.3 22.8-14.8 40.5-14.8s33.4 5.5 40.5 14.8c2.5 3.2 3.3 5.5 3.3 7.5 0 2-7.5 13.8-25.2 24.2-9.4 5.5-21 10-33.8 13v13.6c27.4 1.1 50.8 10.3 50.8 21.3 0 11.8-25.6 21.4-54.8 21.4zM64 8.3c-14.9 0-28.5 4.3-34.5 12.1-1.7 2.2-1.7 3.3-1.6 3.6.1.5 5 10 20.3 19 8.6 5 19 9.1 30.3 11.8V41.1c-25-1.1-44.5-9.3-44.5-19.1 0-9.8 19.5-18 44.5-19.1v-1.1h-.1c0-1 4.5-1.1 5.6-1.1z"/>
        <path fill="#61DAFB" d="M64 89c-30.8 0-55.8-11.2-55.8-25s25-25 55.8-25 55.8 11.2 55.8 25-25 25-55.8 25zm0-46C35.5 43 12.2 52.4 12.2 64S35.5 85 64 85s51.8-9.4 51.8-21S92.5 43 64 43z"/>
        <circle fill="#61DAFB" cx="64" cy="64" r="10.8"/>
      </svg>
    ),
  },
];

export default function CourseGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#081839] mb-4 relative inline-block">
            Our Popular Courses
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-16 h-1 bg-blue-600 rounded-full"></div>
          </h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course) => (
            <div 
              key={course.id} 
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Container - Increased size slightly to fit the new SVGs perfectly */}
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-gray-100">
                {course.icon}
              </div>

              {/* Course Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>

              {/* Course Meta Info */}
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 font-medium">
                <span>{course.duration}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>{course.level}</span>
              </div>

              {/* Action Link */}
              <Link 
                href={`/courses/${course.id}`} 
                className="mt-auto text-blue-600 font-semibold text-sm hover:text-blue-800 flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                View Details
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center md:text-right">
          <Link 
            href="/courses" 
            className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
          >
            View All Courses
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}