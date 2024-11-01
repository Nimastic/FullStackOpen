import React from 'react';

// Header component for displaying the course title
const Header = ({ courseName }) => <h2>{courseName}</h2>;

// Part component for displaying each course part and its exercises
const Part = ({ part }) => (
  <li>
    {part.name} {part.exercises}
  </li>
);

// Content component for rendering all parts of a course
const Content = ({ parts }) => (
  <ul>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </ul>
);

// Course component for rendering the full course including the total exercises
const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <p><strong>Total exercises: {totalExercises}</strong></p>
    </div>
  );
};

export default Course;
