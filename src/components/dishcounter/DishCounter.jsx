import { Counter } from "../counter/Counter";
import { useCount } from "../counter/use-counter";

export const DishCounter = () => {
  const { count, onIncrement, onDecrement } = useCount();

  return (
    <Counter
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
