import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Button } from "../button/Button";
import styles from "../restaurants/restaurants.module.css";
import { NavLink } from "react-router";

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name } = restaurant || {};

  return (
    <NavLink to={`/restaurants/${id}`}>
      {({ isActive }) => (
        <Button
          title={name}
          disabled={isActive}
          className={styles.button}
          size="md"
        />
      )}
    </NavLink>
  );
};
