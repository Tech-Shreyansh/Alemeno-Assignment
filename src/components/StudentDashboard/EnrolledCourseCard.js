import React from 'react';

const EnrolledCourseCard = ({ course, onMarkCompleted }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      {/* Add more details */}
      <button onClick={() => onMarkCompleted(course.id)}>
        Mark as Completed
      </button>
    </div>
  );
};

export default EnrolledCourseCard;
