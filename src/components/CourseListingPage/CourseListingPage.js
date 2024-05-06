import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../../store/actions/courseActions';
import CourseCard from './CourseCard';
import './CourseListingPage.css';

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);
  console.log(courses);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListingPage;
