import { Counter } from "../counter/Counter";
import { useCount } from "../counter/use-counter";
import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { name, text, setName, setText, setInitial } = useForm();
  const { count, onIncrement, onDecrement, onClear } = useCount(1);

  const setClear = () => {
    setInitial();
    onClear();
  };

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
          count={count}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
      <button onClick={() => setClear()}>Clear</button>
    </div>
  );
};
