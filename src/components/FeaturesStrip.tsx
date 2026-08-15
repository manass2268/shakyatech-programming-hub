import React from 'react';

const features = [
  { icon: '👨‍🏫', title: 'Expert Faculty', desc: 'Learn from industry experts' },
  { icon: '💻', title: 'Practical Learning', desc: 'Hands-on projects & assignments' },
  { icon: '🎓', title: 'Certification', desc: 'Get certified & boost your career' },
  { icon: '💼', title: 'Placement Support', desc: 'Resume, interviews & career guidance' },
  { icon: '🏢', title: 'Modern Infrastructure', desc: 'Smart classrooms & labs' },
  { icon: '💲', title: 'Affordable Fees', desc: 'Quality education at affordable fees' }
];

export default function FeaturesStrip() {
  return (
    <div className="bg-white py-8 border-b border-gray-100 shadow-sm relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-3 p-2">
              <div className="text-3xl text-yellow-500">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-[#081839] text-sm leading-tight">{feature.title}</h4>
                <p className="text-[11px] text-gray-500 mt-1 leading-tight">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}