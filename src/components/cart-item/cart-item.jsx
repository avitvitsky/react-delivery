import { Counter } from "../counter/Counter";
import { useCount } from "../counter/use-counter";

export const CartItem = ({ dish }) => {
  const { amount, onIncrement, onDecrement } = useCount(dish.id);

  return (
    <>
      <span>{dish.name}</span>
      <Counter
        amount={amount}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </>
  );
};
