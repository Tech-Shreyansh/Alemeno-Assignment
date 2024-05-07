import { FETCH_COURSES_SUCCESS } from '../actionTypes';

export const fetchCourses = () => {
  return dispatch => {
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
      // Add more course objects here if needed
      {
        id: 3,
        name: 'JavaScript Fundamentals',
        instructor: 'David Lee',
        description: 'Learn the basics of JavaScript programming language.',
        enrollmentStatus: 'Open', 
        thumbnail: 'your.image.here',
        duration: '6 weeks', 
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['None'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to JavaScript',
            content: 'Variables, data types, and basic syntax.'
          },
          {
            week: 2,
            topic: 'Control Flow',
            content: 'Conditional statements and loops.'
          },
        ],
        students: [],
      },
      {
        id: 4,
        name: 'HTML and CSS Basics',
        instructor: 'Emily Johnson',
        description: 'Learn the fundamentals of HTML and CSS for web development.',
        enrollmentStatus: 'Open', 
        thumbnail: 'your.image.here',
        duration: '4 weeks', 
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['None'],
        syllabus: [
          {
            week: 1,
            topic: 'HTML Basics',
            content: 'Introduction to HTML tags and elements.'
          },
          {
            week: 2,
            topic: 'CSS Basics',
            content: 'Introduction to CSS syntax and selectors.'
          },
        ],
        students: [],
      },
      {
        id: 5,
        name: 'Node.js for Beginners',
        instructor: 'Michael Smith',
        description: 'Introduction to server-side JavaScript using Node.js.',
        enrollmentStatus: 'Open', 
        thumbnail: 'your.image.here',
        duration: '8 weeks', 
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Node.js',
            content: 'Setting up Node.js environment and basic server setup.'
          },
          {
            week: 2,
            topic: 'Express.js Framework',
            content: 'Building web applications with Express.js.'
          },
        ],
        students: [],
      },
      {
        id: 6,
        name: 'Python Programming Basics',
        instructor: 'Sarah Brown',
        description: 'Introduction to Python programming language.',
        enrollmentStatus: 'Open', 
        thumbnail: 'your.image.here',
        duration: '6 weeks', 
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['None'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Python',
            content: 'Variables, data types, and basic syntax.'
          },
          {
            week: 2,
            topic: 'Control Flow',
            content: 'Conditional statements and loops in Python.'
          },
        ],
        students: [],
      },
      {
        id: 7,
        name: 'Data Structures and Algorithms',
        instructor: 'Ryan Johnson',
        description: 'Learn fundamental data structures and algorithms.',
        enrollmentStatus: 'Open', 
        thumbnail: 'your.image.here',
        duration: '10 weeks', 
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Data Structures',
            content: 'Arrays, linked lists, and stacks.'
          },
          {
            week: 2,
            topic: 'Sorting Algorithms',
            content: 'Bubble sort, insertion sort, and selection sort.'
          },
        ],
        students: [],
      },
      {
        id: 8,
        name: 'Angular Essentials',
        instructor: 'Chris Lee',
        description: 'Learn the basics of Angular framework for building web applications.',
        enrollmentStatus: 'Open', 
        thumbnail: 'your.image.here',
        duration: '8 weeks', 
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Angular',
            content: 'Setting up Angular environment and basic concepts.'
          },
          {
            week: 2,
            topic: 'Components and Templates',
            content: 'Creating components and templates in Angular.'
          },
        ],
        students: [],
      }];         
    dispatch({ type: FETCH_COURSES_SUCCESS, payload: courses });
  };
};
