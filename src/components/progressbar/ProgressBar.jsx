import { useEffect, useState } from "react";

import styles from "./progressbar.module.css";

export const ProgressBar = () => {
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

  return <div className={styles.progressbar} style={{ width: progress }} />;
};
