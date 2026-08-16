import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesStrip from '@/components/FeaturesStrip';
import CourseGrid from '@/components/CourseGrid';
import StatsStrip from '@/components/StatsStrip';
import NewsEvents from '@/components/NewsEvents';
import Footer from '@/components/Footer'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow w-full">
        {/* JS Reveal hata kar Pure CSS delay classes laga di hain */}
        <div className="css-reveal delay-100">
          <HeroSection />
        </div>

        <div className="css-reveal delay-200">
          <FeaturesStrip />
        </div>

        <div className="css-reveal delay-300">
          <CourseGrid />
        </div>

        <div className="css-reveal delay-400">
          <StatsStrip />
        </div>

        <div className="css-reveal delay-500">
          <NewsEvents />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}