import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-300 rounded-lg shadow-md p-6 flex flex-col h-full">
      <div>
        <h2 className="text-2xl font-semibold mb-4">{course.name}</h2>
        <p className="text-gray-800 mb-2">Instructor: <span className="font-medium">{course.instructor}</span></p>
        <p className="text-gray-800 mb-2">Enrollment Status: <span className="font-medium">{course.enrollmentStatus}</span></p>
        <p className="text-gray-800 mb-2">Schedule: <span className="font-medium">{course.schedule}</span></p>
        <p className="text-gray-800 mb-2">Location: <span className="font-medium">{course.location}</span></p>
        <p className="text-gray-800 mb-4">Duration: <span className="font-medium">{course.duration}</span></p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
          <ul className="list-disc list-inside text-gray-800">
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index}>{prerequisite}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Syllabus</h3>
          <ul className="list-decimal list-inside text-gray-800">
            {course.syllabus.map((item) => (
              <li key={item.week} className="mb-2">
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link to={`/course/${course.id}`} className="mt-auto block text-center py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">View Details</Link>
    </div>
  );
};

export default CourseCard;
