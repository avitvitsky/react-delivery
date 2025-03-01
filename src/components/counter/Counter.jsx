import { Button } from "../button/Button";
import styles from "./counter.module.css";

export const Counter = ({ amount, onIncrement, onDecrement }) => {
  return (
    <div>
      <Button title="-" className={styles.button} onClick={onDecrement} />
      <span className={styles.count}>{amount}</span>
      <Button title="+" className={styles.button} onClick={onIncrement} />
    </div>
  );
};
