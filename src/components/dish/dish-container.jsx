import { useSelector } from "react-redux";
import { Dish } from "./Dish";
import { selectDishById } from "../redux/entities/dishes/slice";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  const { name } = dish || {};

  return <Dish name={name} />;
};
