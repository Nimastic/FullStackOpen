import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  // Calculate total exercises with debugging
  const totalExercises = course.parts.reduce((sum, part) => {
    console.log('Current sum:', sum, '| Current part exercises:', part.exercises);
    return sum + part.exercises;
  }, 0);
  

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <p><strong>Total exercises: {totalExercises}</strong></p>
    </div>
  );
};

export default Course;
