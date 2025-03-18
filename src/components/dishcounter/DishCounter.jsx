import { Counter } from "../counter/Counter";
import { useCount } from "../counter/use-counter";

export const DishCounter = ({ dishId }) => {
  const { amount, onIncrement, onDecrement } = useCount(dishId);

  return (
    <Counter
      amount={amount}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
