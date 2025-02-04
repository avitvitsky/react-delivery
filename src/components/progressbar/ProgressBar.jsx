import { use, useEffect, useState } from "react";

import styles from "./progressbar.module.css";
import { ThemeContext } from "../theme-context";
import classNames from "classnames";

export const ProgressBar = () => {
  const { theme } = use(ThemeContext);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const callback = () => {
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      setProgress(
        (window.innerWidth * window.scrollY) /
          (scrollHeight - window.innerHeight)
      );
    };
    window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", callback);
  }, []);

  return (
    <div
      className={classNames(styles.progressbar, {
        [styles.orange]: theme === "orange",
        [styles.purple]: theme === "purple",
      })}
      style={{ width: progress }}
    />
  );
};
