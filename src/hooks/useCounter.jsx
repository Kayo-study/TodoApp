import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState();

  const increment = () => setCount((prev) => prev + 1);
  const reset = () => setCount(0);

  return { count, increment, reset };
};

const CounterComponent = () => {
  const { count, increment, reset } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};