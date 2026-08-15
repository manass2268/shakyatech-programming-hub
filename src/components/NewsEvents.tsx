import React from 'react';

const events = [
  {
    date: '20',
    month: 'MAY',
    title: 'New Batch Starting Soon',
    desc: 'Admissions open for C, C++, Java, Python & more courses.',
    image: '🎓'
  },
  {
    date: '15',
    month: 'MAY',
    title: 'Workshop on Web Development',
    desc: 'Join our hands-on workshop and build real projects.',
    image: '💻'
  },
  {
    date: '10',
    month: 'MAY',
    title: 'Python Programming Seminar',
    desc: 'Explore career opportunities in Python development.',
    image: '🐍'
  }
];

export default function NewsEvents() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        
        <h3 className="text-sm font-extrabold text-blue-800 uppercase tracking-wider mb-6 border-b-2 border-blue-800 inline-block pb-1">
          NEWS & EVENTS
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Events Grid (Takes 3 columns on large screens) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((evt, idx) => (
              <div key={idx} className="bg-white rounded border border-gray-200 p-4 flex gap-4 hover:shadow-md transition">
                {/* Date Calendar Icon */}
                <div className="bg-gray-100 rounded p-2 text-center h-fit min-w-[50px] border border-gray-200">
                  <div className="text-lg font-bold text-[#081839] leading-none">{evt.date}</div>
                  <div className="text-[10px] text-gray-500 font-semibold">{evt.month}</div>
                </div>
                {/* Content */}
                <div>
                  <h4 className="font-bold text-[#081839] text-sm mb-1 leading-tight">{evt.title}</h4>
                  <p className="text-[11px] text-gray-600 mb-2 leading-tight">{evt.desc}</p>
                  <a href="#" className="text-[11px] text-blue-600 font-bold hover:underline">Read More &rarr;</a>
                </div>
              </div>
            ))}
          </div>

          {/* Download Brochure Banner (Takes 1 column) */}
          <div className="bg-white rounded border border-gray-200 p-5 flex flex-col justify-center items-center text-center shadow-sm">
            <h4 className="font-bold text-[#081839] text-base mb-2">Download Brochure</h4>
            <p className="text-xs text-gray-500 mb-4">Get detailed information about our courses, fees & more.</p>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-[#081839] font-bold py-2 px-6 rounded text-sm transition">
              Download Now 📥
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}