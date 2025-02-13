import { use } from "react";
import { DishCounter } from "../dishcounter/DishCounter";
import { UserContext } from "../user-context";

export const Dish = ({ name }) => {
  const { user } = use(UserContext);

  if (!name) {
    return null;
  }

  return (
    <>
      <span>{name}</span>
      {user.isAuthorized && <DishCounter />}
    </>
  );
};
