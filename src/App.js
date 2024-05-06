import React from 'react';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import CourseListingPage from './components/CourseListingPage/CourseListingPage';
import { Provider } from 'react-redux';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //       <Route exact path="/" component={CourseListingPage} />
    //   </Routes>
    // </BrowserRouter>
    <CourseListingPage />
  );
}

export default App;
