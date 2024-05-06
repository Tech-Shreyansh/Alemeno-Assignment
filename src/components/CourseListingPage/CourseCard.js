import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* <img src={course.thumbnail} alt={course.name} className="w-full h-32 object-cover mb-4 rounded-md" /> */}
      <h2 className="text-lg font-semibold mb-2">{course.name}</h2>
      <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
      <p className="text-gray-600 mb-2">Enrollment Status: {course.enrollmentStatus}</p>
      <p className="text-gray-600 mb-2">Schedule: {course.schedule}</p>
      <p className="text-gray-600 mb-2">Location: {course.location}</p>
      <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
      <div>
        <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {course.prerequisites.map((prerequisite, index) => (
            <li key={index}>{prerequisite}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Syllabus</h3>
        <ul className="list-decimal list-inside text-gray-600">
          {course.syllabus.map((item) => (
            <li key={item.week} className="mb-2">
              <strong>Week {item.week}:</strong> {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseCard;
