import { ENROLL_COURSE, MARK_COURSE_COMPLETED } from '../actionTypes';

export const enrollCourse = (courseId) => {
  return {
    type: ENROLL_COURSE,
    payload: {
      courseId: courseId,
    },
  };
};

export const markCourseCompleted = (courseId) => {
  return {
    type: MARK_COURSE_COMPLETED,
    payload: {
      courseId: courseId,
    },
  };
};
