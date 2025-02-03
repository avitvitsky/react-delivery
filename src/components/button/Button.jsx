import classNames from "classnames";
import styles from "./button.module.css";
import { use } from "react";
import { ThemeContext } from "../theme-context";

export const Button = ({
  title,
  onClick,
  disabled,
  className,
  size = "xs",
}) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.button, className, {
        [styles.xs]: size === "xs",
        [styles.md]: size === "md",
        [styles.orange]: theme === "orange",
        [styles.purple]: theme === "purple",
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
