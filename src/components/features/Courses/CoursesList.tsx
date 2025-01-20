import React, { useState } from 'react';
import { Database, Brain, LineChart, Code2, Palette, TrendingUp } from 'lucide-react';
import { CourseCard } from './CourseCard';
import { CourseFilters } from './CourseFilters';

const courses = [
  {
    title: 'Full Stack Development',
    description: 'Master both frontend and backend development with modern technologies.',
    icon: Code2,
    duration: '12 Weeks',
    level: 'Intermediate',
    price: 999,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    category: 'Development',
    students: 1234,
    modules: 6
  },
  {
    title: 'Data Science with Python',
    description: 'Learn data analysis, machine learning, and statistical modeling.',
    icon: Brain,
    duration: '10 Weeks',
    level: 'Intermediate',
    price: 899,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    category: 'Data Science',
    students: 856,
    modules: 5
  },
  // Add more courses...
];

export const CoursesList = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [visibleCourses, setVisibleCourses] = useState(6);

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return -1; // Assuming newest first
        default:
          return b.students - a.students; // Most popular
      }
    })
    .slice(0, visibleCourses);

  return (
    <div>
      <CourseFilters
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
      
      {visibleCourses < courses.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCourses((prev) => prev + 6)}
            className="bg-blue-900/30 border border-blue-800 rounded-lg px-6 py-3 text-white hover:bg-blue-800/30 transition-colors"
          >
            Load More Courses
          </button>
        </div>
      )}
    </div>
  );
};