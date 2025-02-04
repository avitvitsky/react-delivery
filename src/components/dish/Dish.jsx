import { use } from "react";
import { DishCounter } from "../dishcounter/DishCounter";
import { UserContext } from "../user-context";

export const Dish = ({ dish }) => {
  const { user } = use(UserContext);
  const { name } = dish;

  if (!name) {
    return null;
  }

  return (
    <>
      <span>{name}</span>
      {Boolean(user) && <DishCounter />}
    </>
  );
};
