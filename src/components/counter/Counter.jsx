import { Button } from "../button/Button";
import styles from "./counter.module.css";

export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <Button title="-" className={styles.button} onClick={onDecrement} />
      <span className={styles.count}>{count}</span>
      <Button title="+" className={styles.button} onClick={onIncrement} />
    </div>
  );
};
