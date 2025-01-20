import React from 'react';
import { CoursesList } from './CoursesList';
import { CoursesHeader } from './CoursesHeader';
import { CourseHighlight } from './CourseHighlight';

export const CoursesSection = () => {
  return (
    <section className="py-24 relative" id="courses">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/0 via-blue-900/50 to-blue-900/0" />
      <div className="container mx-auto px-6 relative">
        <CoursesHeader />
        <CourseHighlight />
        <CoursesList />
      </div>
    </section>
  );
};