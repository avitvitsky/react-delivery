import { Counter } from "../counter/Counter";

export const Dish = ({ dish }) => {
  const { name } = dish;

  if (!name) {
    return null;
  }

  return (
    <>
      <span>{name}</span>
      <Counter />
    </>
  );
};
