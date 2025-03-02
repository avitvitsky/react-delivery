import styles from "./restaurant.module.css";
import { NavLink } from "react-router";
import { Button } from "../button/Button";

export const Restaurant = ({ id, name }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <div className={styles.root}>
        <NavLink to={`/restaurants/${id}/menu`}>
          {({ isActive }) => <Button title="Меню" disabled={isActive} />}
        </NavLink>
        <NavLink to={`/restaurants/${id}/reviews`}>
          {({ isActive }) => <Button title="Отзывы" disabled={isActive} />}
        </NavLink>
      </div>
    </div>
  );
};
