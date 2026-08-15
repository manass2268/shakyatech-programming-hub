import React from 'react';

const courses = [
  { id: 1, title: 'C Programming', duration: '3 Months', level: 'Beginner', icon: 'C' },
  { id: 2, title: 'C++ Programming', duration: '3 Months', level: 'Intermediate', icon: 'C++' },
  { id: 3, title: 'Java Programming', duration: '4 Months', level: 'Intermediate', icon: '☕' },
  { id: 4, title: 'Python Programming', duration: '3 Months', level: 'Beginner', icon: '🐍' },
  { id: 5, title: 'O Level (IT)', duration: '1 Year', level: 'Beginner', icon: 'O' },
  { id: 6, title: 'Web Development', duration: '3 Months', level: 'Intermediate', icon: '</>' },
];

export default function CourseGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Our Popular Courses</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center bg-gray-50 hover:bg-white">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-6">
                {course.duration} &nbsp;|&nbsp; {course.level}
              </p>
              <button className="mt-auto text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-1">
                View Details <span>&rarr;</span>
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-right mt-8">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            View All Courses &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}