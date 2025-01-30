import { useEffect, useState } from "react";

import styles from "./progressbar.module.css";

export const ProgressBar = () => {
  const [progressCoef, setProgressCoef] = useState(0);

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

      setProgressCoef(window.scrollY / (scrollHeight - window.innerHeight));
    };
    window.addEventListener("scroll", callback);

    return () => window.removeEventListener("scroll", callback);
  }, []);

  return (
    <div
      className={styles.progressbar}
      style={{ width: window.innerWidth * progressCoef }}
    ></div>
  );
};
