import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import styles from "./restaurant-tab.module.css";
import { NavLink } from "react-router";
import classNames from "classnames";

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name } = restaurant || {};

  return (
    <NavLink
      to={`/restaurants/${id}`}
      className={({ isActive }) =>
        classNames(styles.navlink, {
          [styles.active]: isActive,
        })
      }
    >
      {name}
    </NavLink>
  );
};
