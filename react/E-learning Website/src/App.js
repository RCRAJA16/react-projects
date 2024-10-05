import React from 'react';
import logo from "./logo.png";
import './App.css';
import CourseInfo from './Components/CourseInfo/CourseInfo';

function App() {
  return (
    <div className="container-fluid">
      <img src = {logo} className="text-center bg-info p-3" className = "logo"></img>
      {}
      <CourseInfo></CourseInfo>
    </div>
  );
}

export default App;
