import styles from "./restaurant.module.css";
import { Tablink } from "../tablink/Tablink";

export const Restaurant = ({ id, name }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>{name}</h2>
      <div className={styles.root}>
        <Tablink link={`/restaurants/${id}/menu`} title="Меню" />
        <Tablink link={`/restaurants/${id}/reviews`} title="Отзывы" />
      </div>
    </div>
  );
};
