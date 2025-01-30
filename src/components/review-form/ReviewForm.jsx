import { Counter } from "../counter/Counter";
import { useForm } from "./use-form";

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
    <div>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <span>Rating</span>
        <Counter
          count={rating}
          onIncrement={setIncrement}
          onDecrement={setDecrement}
        />
      </div>
      <button onClick={setInitial}>Clear</button>
    </div>
  );
};
