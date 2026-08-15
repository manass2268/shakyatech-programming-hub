import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#081839] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 xl:gap-8">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 xl:w-[45%] space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
            Learn Today, <br />
            Lead <span className="text-yellow-500">Tomorrow</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Industry-oriented courses in C, C++, Java, Python, O Level and more. 
            Choose Online, Offline or Hybrid learning and start your journey towards a successful career.
          </p>
          
          {/* Inline Stats - Added flex-wrap so it doesn't break on small screens */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 py-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl text-yellow-500">🎓</span>
              <div className="text-left"><h4 className="font-bold text-lg sm:text-xl leading-none">15+</h4><p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Courses</p></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl text-yellow-500">👥</span>
              <div className="text-left"><h4 className="font-bold text-lg sm:text-xl leading-none">5000+</h4><p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Trained</p></div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl text-yellow-500">🏢</span>
              <div className="text-left"><h4 className="font-bold text-lg sm:text-xl leading-none">10+</h4><p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Centers</p></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-[#081839] font-bold py-3 px-6 sm:px-8 rounded transition duration-300 shadow-lg text-sm sm:text-base">
              Explore Courses &rarr;
            </button>
            <button className="border border-gray-400 hover:border-white text-white font-bold py-3 px-6 sm:px-8 rounded transition duration-300 text-sm sm:text-base">
              Download Brochure &darr;
            </button>
          </div>
        </div>

        {/* Center Image Area - Only visible on Extra Large (xl) screens to save space */}
        <div className="hidden xl:flex xl:w-[25%] justify-center relative h-[400px]">
          <img 
            src="https://placehold.co/300x500/081839/FFD700?text=Student+Image" 
            alt="Student" 
            className="absolute bottom-0 object-contain h-full w-full object-bottom"
          />
        </div>

        {/* Right Content Area: Dark Enquiry Form */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-1/2 xl:w-[30%] relative z-20">
          <div className="bg-[#0b1f47] rounded-xl shadow-2xl p-6 sm:p-7 text-white border border-white/10 w-full max-w-sm mx-auto lg:mr-0">
            <h3 className="text-lg sm:text-xl font-bold mb-5 text-center lg:text-left">
              Enquire Now
            </h3>
            
            <form className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="👤 Full Name" className="w-full border border-white/20 rounded px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 text-sm font-medium bg-[#06122b] text-white placeholder-gray-400" required />
              <input type="tel" placeholder="📱 Mobile Number" className="w-full border border-white/20 rounded px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 text-sm font-medium bg-[#06122b] text-white placeholder-gray-400" required />
              <select className="w-full border border-white/20 rounded px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 text-sm font-medium bg-[#06122b] text-gray-400" required defaultValue="">
                <option value="" disabled>📚 Select Course</option>
                <option value="c">C Programming</option>
                <option value="cpp">C++ Programming</option>
                <option value="java">Java Programming</option>
              </select>
              <select className="w-full border border-white/20 rounded px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 text-sm font-medium bg-[#06122b] text-gray-400" required defaultValue="">
                <option value="" disabled>🏢 Select Mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <button type="button" className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#081839] font-extrabold py-3 sm:py-3.5 px-4 rounded transition duration-300 mt-2 shadow-md text-sm sm:text-base">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}