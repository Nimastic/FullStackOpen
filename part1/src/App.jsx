import { useState } from 'react';

const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part, index) => (
      <Part key={index} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

// Display Component
const Display = ({ counter }) => <div>{counter}</div>;

// Button Component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// History Component for Conditional Rendering
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }
  return <div>Button press history: {allClicks.join(' ')}</div>;
};

// Main App Component
const App = () => {
  // Define course object here
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
    ],
  };

  const [counter, setCounter] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  // Handlers to update each state
  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setRight(right + 1);
  };

  return (
    <div>
      {/* Display course information */}
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      
      <h1>React State Management</h1>
      <Display counter={counter} />

      {/* Control buttons */}
      <Button onClick={increaseCounter} text="Increase Counter" />
      <Button onClick={resetCounter} text="Reset Counter" />
      <Button onClick={decreaseCounter} text="Decrease Counter" />

      <h2>Button Click Counter</h2>
      <div>
        {left} <Button onClick={handleLeftClick} text="Left" />
        <Button onClick={handleRightClick} text="Right" /> {right}
      </div>

      {/* Click history */}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
