# React + Vite

Part 1: React Fundamentals
1.1 - Introduction to Components
Components are the building blocks of React applications.
Components can be defined as functions returning JSX (JavaScript XML) to render HTML elements.
Props (short for "properties") are used to pass data to components.
1.2 - Adding State with useState
useState is a React hook used to add state to functional components.
It returns an array with two values: the current state and a function to update the state.
State allows components to maintain and update data over time without reloading the page.
1.3 - Event Handling
Event handlers in React are functions triggered by user actions (e.g., clicks).
To update state on a button click, pass an event handler function as the onClick prop.
1.4 - Using Multiple Pieces of State
Multiple useState calls allow for multiple independent pieces of state within a component.
Each piece of state can be updated independently using its respective setter function.
1.5 - Complex State Management with Objects
State can be stored as complex objects for managing related data together.
Updating complex state requires creating a copy using the spread operator (...) to prevent direct mutation.
1.6 - Conditional Rendering
Components can render different elements conditionally based on the current state.
This is useful for showing or hiding content depending on user actions or state changes.
1.7 - Rendering Lists
Lists are rendered by mapping an array of data to JSX elements.
Each item in a list should have a unique key prop for efficient rendering.
1.8 - Passing State to Child Components
State can be passed down as props to child components, allowing them to render and use the state from the parent.
1.9 - Basic Application Structure and Component Organization
Components should be organized to separate concerns and improve readability.
Small reusable components (e.g., Button, Display) help to build complex UIs efficiently.
1.10 - Creating a Feedback Application (Unicafe Example)
Components and state are combined to build a feedback application where users submit feedback.
State management for different feedback types (good, neutral, bad) is handled using multiple pieces of state.
1.11 - Calculating Statistics
Calculations can be performed based on state values to display additional data, such as averages and totals.
1.12 - Extracting Components
Reusable components, such as Button and StatisticLine, improve maintainability by isolating individual pieces of functionality.
1.13 - Conditional Display of Components
Render components conditionally, e.g., displaying statistics only when feedback has been submitted.
1.14 - Anecdote Application with Voting
Array manipulation with state: Use a useState array to store votes for each anecdote.
Calculating the highest-voted anecdote and displaying it dynamically based on state.
Key Concepts Summary
Components: Core UI building blocks in React.
State Management: Using useState for managing data within components.
Props: Passing data from parent to child components.
Event Handling: Adding interactivity by handling user actions.
Conditional Rendering: Rendering elements conditionally based on state.
List Rendering: Using .map() to render arrays of data as lists.
Reusable Components: Creating small, focused components to simplify code structure.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
