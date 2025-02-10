import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Button } from "../button/Button";
import styles from "../restaurants/restaurants.module.css";

export const RestaurantTabContainer = ({ id, onClick, disabled }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name } = restaurant || {};

  return (
    <Button
      title={name}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
      size="md"
    />
  );
};
