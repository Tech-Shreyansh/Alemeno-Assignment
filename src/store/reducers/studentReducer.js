import { ENROLL_COURSE, MARK_COURSE_COMPLETED } from '../actionTypes';

const initialState = {
  enrolledCourses: [],
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENROLL_COURSE:
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, action.payload],
      };
    case MARK_COURSE_COMPLETED:
      const { courseId } = action.payload;
      return {
        ...state,
        enrolledCourses: state.enrolledCourses.map(course => {
          if (course.id === courseId) {
            return {
              ...course,
              completed: true,
            };
          }
          return course;
        }),
      };
    default:
      return state;
  }
};

export default studentReducer;
