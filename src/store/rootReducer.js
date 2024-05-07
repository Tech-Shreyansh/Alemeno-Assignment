import { combineReducers } from 'redux';
import courseReducer from './reducers/courseReducer';
import studentReducer from './reducers/studentReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  enrolledCourses: studentReducer,
});

export default rootReducer;
