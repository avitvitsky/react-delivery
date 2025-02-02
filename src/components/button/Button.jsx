import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({
  title,
  onClick,
  disabled,
  className,
  size = "xs",
}) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.xs]: size === "xs",
        [styles.md]: size === "md",
      })}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
