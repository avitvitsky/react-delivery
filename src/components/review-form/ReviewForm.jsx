import { Button } from "../button/Button";
import { Counter } from "../counter/Counter";
import { useForm } from "./use-form";

import styles from "./review-form.module.css";

export const ReviewForm = () => {
  const {
    name,
    text,
    rating,
    setName,
    setText,
    setIncrement,
    setDecrement,
    setInitial,
  } = useForm();

  return (
    <form className={styles.root} onSubmit={(event) => event.preventDefault()}>
      <span>Name</span>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <span>Text</span>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <span>Rating</span>
      <Counter
        count={rating}
        onIncrement={setIncrement}
        onDecrement={setDecrement}
      />
      <Button title="Clear" className={styles.clear} onClick={setInitial} />
    </form>
  );
};
