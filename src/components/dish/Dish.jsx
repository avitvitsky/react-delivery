import { use } from "react";
import { DishCounter } from "../dishcounter/DishCounter";
import { UserContext } from "../user-context";
import { Link } from "react-router";

export const Dish = ({ id, name }) => {
  const { user } = use(UserContext);

  if (!name) {
    return null;
  }

  return (
    <>
      <Link to={`/dish/${id}`}>{name}</Link>
      {user.isAuthorized && <DishCounter dishId={id} />}
    </>
  );
};
