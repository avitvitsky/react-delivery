import { NavLink } from "react-router";
import classNames from "classnames";
import styles from "./tablink.module.css";

export const Tablink = ({ link, title }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        classNames(styles.navlink, {
          [styles.active]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};
