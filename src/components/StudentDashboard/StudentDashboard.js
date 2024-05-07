import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markCourseCompleted } from '../../store/actions/studentActions';
import EnrolledCourseCard from './EnrolledCourseCard';

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector(state => state.student.enrolledCourses);

  const handleMarkCompleted = courseId => {
    dispatch(markCourseCompleted(courseId));
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      {enrolledCourses.map(course => (
        <EnrolledCourseCard
          key={course.id}
          course={course}
          onMarkCompleted={handleMarkCompleted}
        />
      ))}
    </div>
  );
};

export default StudentDashboard;
