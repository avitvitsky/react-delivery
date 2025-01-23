import { Counter } from "../counter/Counter";

export const Dish = ({ dish }) => {
  const { id, name } = dish;

  if (!id || !name) {
    return null;
  }

  return (
    <li key={id}>
      <span>{name}</span>
      <Counter />
    </li>
  );
};
