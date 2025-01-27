import { DishCounter } from "../dishcounter/DishCounter";

export const Dish = ({ dish }) => {
  const { name } = dish;

  if (!name) {
    return null;
  }

  return (
    <>
      <span>{name}</span>
      <DishCounter />
    </>
  );
};
