import { use } from "react";
import { ThemeContext } from "../theme-context";
import { ToggleThemeButton } from "../toggle-theme-button/Toggle-theme-button";
import styles from "./header.module.css";
import classNames from "classnames";

export const Header = () => {
  const { theme } = use(ThemeContext);

  return (
    <header
      className={classNames(styles.header, {
        [styles.orange]: theme === "orange",
        [styles.purple]: theme === "purple",
      })}
    >
      <span className={styles.title}>RapidDelivery</span>
      <ToggleThemeButton />
    </header>
  );
};
