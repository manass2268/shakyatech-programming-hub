import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesStrip from '@/components/FeaturesStrip';
import CourseGrid from '@/components/CourseGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Top Navigation Bar */}
      <Navbar />

      {/* 2. Main Hero Section with Enquiry Form */}
      <HeroSection />

      {/* 3. Features Strip (Faculty, Placement, etc.) */}
      <FeaturesStrip />

      {/* 4. Popular Courses Grid */}
      <CourseGrid />
    </div>
  );
}