import { useState } from "react";

export const useCount = (min = 0, max = 5) => {
  const [count, setCount] = useState(min);

  const onIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };
  const onDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };
  const onClear = () => {
    setCount(min);
  };

  return {
    count: count,
    onIncrement,
    onDecrement,
    onClear,
  };
};
