import { useCallback } from "react";
import {
  addToCart,
  removeFromCart,
  selectCartAmountById,
} from "../redux/entities/cart/slice";
import { useDispatch, useSelector } from "react-redux";

export const useCount = (dishId) => {
  const dispatch = useDispatch();

  const amount =
    useSelector((state) => selectCartAmountById(state, dishId)) || 0;

  const onIncrement = useCallback(
    () => dispatch(addToCart(dishId)),
    [dishId, dispatch]
  );
  const onDecrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dishId, dispatch]
  );

  return {
    amount,
    onIncrement,
    onDecrement,
  };
};
