import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-[#081839] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden">
      
      {/* Optional: Ek subtle background glow effect */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 xl:gap-8 max-w-7xl">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[50%] xl:w-[45%] space-y-6 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
            Learn Today, <br className="hidden sm:block" />
            Lead <span className="text-yellow-500 relative inline-block">
              Tomorrow
              {/* Ek choti si underline effect "Tomorrow" ke niche */}
              <div className="absolute bottom-1 left-0 w-full h-2 bg-yellow-500/30 -z-10 skew-x-[-15deg]"></div>
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Industry-oriented courses in C, C++, Java, Python, O Level and more. 
            Choose Online, Offline or Hybrid learning and start your journey towards a successful career.
          </p>
          
          {/* Inline Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 py-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl text-yellow-500">🎓</span>
              <div className="text-left">
                <h4 className="font-bold text-lg sm:text-xl leading-none">15+</h4>
                <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-1">Courses</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl text-yellow-500">👥</span>
              <div className="text-left">
                <h4 className="font-bold text-lg sm:text-xl leading-none">5000+</h4>
                <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-1">Trained</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl text-yellow-500">🏢</span>
              <div className="text-left">
                <h4 className="font-bold text-lg sm:text-xl leading-none">10+</h4>
                <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider mt-1">Centers</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-[#081839] font-bold py-3 px-6 sm:px-8 rounded transition duration-300 shadow-[0_4px_14px_0_rgba(234,179,8,0.39)] hover:shadow-[0_6px_20px_rgba(234,179,8,0.23)] text-sm sm:text-base">
              Explore Courses &rarr;
            </button>
            <button className="bg-transparent border border-gray-400 hover:border-white text-white hover:bg-white/5 font-bold py-3 px-6 sm:px-8 rounded transition duration-300 text-sm sm:text-base">
              Download Brochure &darr;
            </button>
          </div>
        </div>

        {/* Center Image Area - Optimized for xl screens */}
        {/* Agar aapke paas koi PNG student image hai without background, toh yahan src me daal dijiye */}
        <div className="hidden xl:flex xl:w-[25%] justify-center relative h-[450px]">
          <div className="absolute bottom-0 w-full h-[80%] bg-blue-900/40 rounded-t-[100px] -z-10 blur-md"></div>
          <img 
            src="https://placehold.co/350x550/transparent/FFD700?text=Student+Image" 
            alt="Student" 
            className="absolute bottom-0 object-contain h-full w-full object-bottom"
          />
        </div>

        {/* Right Content Area: Dark Enquiry Form */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[30%] relative z-20">
          <div className="bg-[#0b1f47]/80 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-7 text-white border border-white/10 w-full max-w-md mx-auto lg:mr-0">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 text-center lg:text-left flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span>
              Enquire Now
            </h3>
            
            <form className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="👤 Full Name" className="w-full border border-white/10 rounded px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-sm font-medium bg-[#06122b] text-white placeholder-gray-500 transition-all" required />
              <input type="tel" placeholder="📱 Mobile Number" className="w-full border border-white/10 rounded px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-sm font-medium bg-[#06122b] text-white placeholder-gray-500 transition-all" required />
              <input type="email" placeholder="✉️ Email Address" className="w-full border border-white/10 rounded px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-sm font-medium bg-[#06122b] text-white placeholder-gray-500 transition-all" required />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <select className="w-full border border-white/10 rounded px-3 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-sm font-medium bg-[#06122b] text-gray-300 transition-all" required defaultValue="">
                  <option value="" disabled>📚 Course</option>
                  <option value="c">C Programming</option>
                  <option value="cpp">C++ Programming</option>
                  <option value="java">Java Programming</option>
                  <option value="python">Python</option>
                  <option value="o-level">O Level</option>
                  <option value="web-dev">Web Dev</option>
                </select>
                
                <select className="w-full border border-white/10 rounded px-3 py-2.5 sm:py-3 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 text-sm font-medium bg-[#06122b] text-gray-300 transition-all" required defaultValue="">
                  <option value="" disabled>🏢 Mode</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <button type="button" className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#081839] font-extrabold py-3 sm:py-3.5 px-4 rounded transition duration-300 mt-4 shadow-md text-sm sm:text-base flex justify-center items-center gap-2 group">
                Submit Enquiry
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}