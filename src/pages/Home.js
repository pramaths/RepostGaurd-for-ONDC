import React from 'react';

const Home = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>Click the button to increase the count:</p>
      <button onClick={incrementCount}>Increase Count</button>
      <p>Current Count: {count}</p>
    </div>
  );
};

export default Home;
