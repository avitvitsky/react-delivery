import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dishes/slice";
import { CartItem } from "./cart-item";

export const CartItemContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }
  return <CartItem dish={dish} />;
};
