import React, { useState } from 'react';

const Action3 = () => {
  let initialCount=1;

  
  if (initialCount>0) {
    initialCount = 10;
  } else {
    initialCount = 0;
  }

  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Action3;
