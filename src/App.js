import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseListingPage from './components/CourseListingPage/CourseListingPage';
import CourseDetailsPage from './components/CourseDetailsPage/CourseDetailsPage';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseListingPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
