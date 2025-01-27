import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={onIncrement}>+</button>
      {count}
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
