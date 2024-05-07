import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetails = () => {
  const courses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.'
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.'
        },
      ],
      students: [
        {
          id: 102,
          name: 'Bob Smith',
          email: 'bob@example.com',
        },
      ],
    },
    // Add more course objects here if needed
    {
      id: 2,
      name: 'Advanced React',
      instructor: 'Jane Smith',
      description: 'Deep dive into React concepts and advanced techniques.',
      enrollmentStatus: 'Open',
      thumbnail: 'your.image.here',
      duration: '12 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
      location: 'Online',
      prerequisites: ['Intermediate JavaScript knowledge', 'Experience with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Advanced State Management',
          content: 'Using Redux or Context API for state management.'
        },
        {
          week: 2,
          topic: 'Optimizing Performance',
          content: 'Performance optimization techniques in React applications.'
        },
      ],
      students: [
        {
          id: 103,
          name: 'Alice Johnson',
          email: 'alice@example.com',
        },
        {
          id: 104,
          name: 'Charlie Brown',
          email: 'charlie@example.com',
        },
      ],
    },
  ];

  const { id } = useParams();

  // Find the course with the matching ID
  const course = courses.find(course => course.id.toString() === id);

  if (!course) {
    return <div className="p-8 bg-white rounded-lg shadow-md">Course not found</div>;
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
      <p className="text-lg mb-2">Instructor: {course.instructor}</p>
      <p className="mb-2">Description: {course.description}</p>
      <p className="mb-2">Enrollment Status: {course.enrollmentStatus}</p>
      <p className="mb-2">Schedule: {course.schedule}</p>
      <p className="mb-2">Location: {course.location}</p>
      <p className="mb-2">Duration: {course.duration}</p>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Prerequisites</h3>
        <ul className="list-disc pl-5">
          {course.prerequisites.map((prerequisite, index) => (
            <li key={index} className="mb-1">{prerequisite}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-2">Syllabus</h3>
        <ul className="list-decimal pl-5">
          {course.syllabus.map((item) => (
            <li key={item.week} className="mb-1">
              <strong>Week {item.week}:</strong> {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/" className="block text-center mt-6 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">Back to Courses</Link>
    </div>
  );
};

export default CourseDetails;