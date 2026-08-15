import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesStrip from '@/components/FeaturesStrip';
import CourseGrid from '@/components/CourseGrid';
import StatsStrip from '@/components/StatsStrip';
import NewsEvents from '@/components/NewsEvents';
import Footer from '@/components/Footer'; // 1. Yahan import karein

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesStrip />
      <CourseGrid />
      <StatsStrip />
      <NewsEvents />
      
      {/* 2. Yahan Footer add karein */}
      <Footer />
    </div>
  );
}