import { useState } from 'react';

// Header Component
const Header = ({ course }) => <h1>{course}</h1>;

// Content Component
const Content = ({ parts }) => (
  <div>
    {parts.map((part, index) => (
      <Part key={index} name={part.name} exercises={part.exercises} />
    ))}
  </div>
);

// Part Component
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

// Total Component
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

// Display Component
const Display = ({ counter }) => <div>{counter}</div>;

// Button Component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// History Component
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }
  return <div>Button press history: {allClicks.join(' ')}</div>;
};

// Statistics Component
const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
  const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Average score: {averageScore.toFixed(2)}</p>
      <p>Positive feedback: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
};

// Main App Component
const App = () => {
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

  // Feedback state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Feedback handlers
  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      {/* Display course information */}
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      
      <h1>React State Management</h1>
      <Display counter={counter} />

      {/* Counter controls */}
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

      {/* Unicafe Feedback */}
      <h2>Unicafe Feedback</h2>
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />

      {/* Statistics */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
