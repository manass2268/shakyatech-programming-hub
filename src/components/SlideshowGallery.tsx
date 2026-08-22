"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Actual local photos from your 'public/assests' folder
const slides = [
  {
    image: "/assests/img1.jpeg",
    title: "Interactive Classrooms",
    subtitle: "Experience modern learning with our expert faculty in fully equipped smart classrooms."
  },
  {
    image: "/assests/img2.jpeg",
    title: "Advanced Practical Labs",
    subtitle: "100% hands-on coding practice on latest systems for real-world project development."
  },
  {
    image: "/assests/img4.jpeg",
    title: "Expert Mentorship",
    subtitle: "Get personalized guidance and doubt-clearing sessions from industry professionals."
  },
  {
    image: "/assests/img5.jpeg",
    title: "Seminars & Workshops",
    subtitle: "Regular weekend workshops to keep you updated with the latest tech trends."
  },
  {
    image: "/assests/img6.jpeg",
    title: "Student Success",
    subtitle: "Join thousands of successful alumni working in top IT companies across India."
  }
];

export default function SlideshowGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Next slide par jaane ka function
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, []);

  // Pichli slide par aane ka function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Har 4 second mein automatically slide change karne ka logic
  useEffect(() => {
    if (isPaused) return; // Agar mouse upar hai toh auto-slide rok do
    const interval = setInterval(nextSlide, 4000); // 4000ms = 4 seconds
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-4 max-w-7xl mb-10 text-center">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Life at ShakyaTech</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-[#081839] tracking-tight">
          Our Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">Gallery</span>
        </h3>
      </div>

      {/* Main Slideshow Container */}
      <div 
        className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Images Track */}
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full shrink-0 relative">
              <Image 
                src={slide.image} 
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Slide Text */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                <h4 className="text-2xl md:text-4xl font-bold mb-2 transform translate-y-0 opacity-100 transition-all duration-500">
                  {slide.title}
                </h4>
                <p className="text-sm md:text-lg text-gray-200 max-w-xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Visible only on Hover on Desktop) */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white text-white hover:text-[#081839] backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white text-white hover:text-[#081839] backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicators at the bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? 'bg-yellow-500 w-6 h-2' 
                  : 'bg-white/50 hover:bg-white w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}