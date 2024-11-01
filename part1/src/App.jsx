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

// Button Component (Reusable for different buttons)
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// History Component
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }
  return <div>Button press history: {allClicks.join(' ')}</div>;
};

// StatisticLine Component for displaying a single statistic row
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

// Statistics Component displaying statistics in an HTML table
const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
  const positivePercentage = totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total feedback" value={totalFeedback} />
          <StatisticLine text="Average score" value={averageScore.toFixed(2)} />
          <StatisticLine text="Positive feedback" value={`${positivePercentage.toFixed(2)}%`} />
        </tbody>
      </table>
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

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);

  // Function to select a random anecdote
  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

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

      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[selected]}</p>
      <button onClick={getRandomAnecdote}>Show Random Anecdote</button>

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

      {/* Statistics Section */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
