import classNames from "classnames";
import styles from "./footer.module.css";
import { ThemeContext } from "../theme-context";
import { use } from "react";

export const Footer = () => {
  const { theme } = use(ThemeContext);

  return (
    <footer
      className={classNames(styles.footer, {
        [styles.orange]: theme === "orange",
        [styles.purple]: theme === "purple",
      })}
    >
      Anton Vitvitskii
    </footer>
  );
};
