// Import action types
import { FETCH_ENROLLED_COURSES } from '../actionTypes';

export const fetchEnrolledCourses = () => {
  return dispatch => {
    const enrolledCourses = [
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
      dispatch({ type: FETCH_ENROLLED_COURSES, payload: enrolledCourses });
    };
};
