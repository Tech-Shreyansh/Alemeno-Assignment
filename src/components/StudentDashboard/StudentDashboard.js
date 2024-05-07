import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEnrolledCourses } from '../../store/actions/studentActions';
import EnrolledCourseCard from './EnrolledCourseCard';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => (state.enrolledCourses)["enrolledCourses"]);

  useEffect(() => {
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  return (
    <div className='flex flex-col min-h-[20vh] justify-between items-center'>
      <b><h1 className='text-2xl'>Student Dashboard</h1></b>
      {enrolledCourses ? enrolledCourses.length === 0 ? (
        <p>No courses enrolled</p>
      ) : (
        enrolledCourses.map(course => (
          <EnrolledCourseCard key={course.id} course={course} />
        ))
      ):<p>No courses enrolled</p>}
      <Link to="/" className="w-fit bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
        Go to Courses
      </Link>
    </div>
  );
};

export default StudentDashboard;
