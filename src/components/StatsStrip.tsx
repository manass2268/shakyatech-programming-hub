import React from 'react';

const stats = [
  { icon: '🎖️', value: '15+', label: 'Years of Excellence' },
  { icon: '👥', value: '5000+', label: 'Students Trained' },
  { icon: '🏢', value: '10+', label: 'Learning Centers' },
  { icon: '📈', value: '95%', label: 'Placement Assistance' },
  { icon: '👨‍🏫', value: '100+', label: 'Expert Faculty' },
  { icon: '🤝', value: '50+', label: 'Industry Partners' },
];

export default function StatsStrip() {
  return (
    <div className="bg-[#081839] py-8 border-t-4 border-yellow-500 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center px-2 py-3 md:py-0">
              <div className="text-3xl mb-2 text-yellow-500">{stat.icon}</div>
              <h3 className="text-2xl font-extrabold text-white leading-none mb-1">{stat.value}</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-wide font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}