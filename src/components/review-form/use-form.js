import { useReducer } from "react";

const INITIAL_VALUE = {
  name: "",
  text: "",
  rating: 1,
};

const SET_NAME = "SET_NAME";
const SET_TEXT = "SET_TEXT";
const SET_INITIAL = "SET_INITIAL";
const SET_INCREMENT = "SET_INCREMENT";
const SET_DECREMENT = "SET_DECREMENT";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME:
      return {
        ...INITIAL_VALUE,
        name: payload,
        rating: state.rating,
      };
    case SET_TEXT:
      return {
        ...state,
        text: payload,
      };
    case SET_INCREMENT:
      return {
        ...state,
        rating: payload < 5 ? payload + 1 : payload,
      };
    case SET_DECREMENT:
      return {
        ...state,
        rating: payload > 1 ? payload - 1 : payload,
      };
    case SET_INITIAL:
      return INITIAL_VALUE;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const { name, text, rating } = form;

  const setName = (value) => dispatch({ type: SET_NAME, payload: value });
  const setText = (value) => dispatch({ type: SET_TEXT, payload: value });
  const setIncrement = () => dispatch({ type: SET_INCREMENT, payload: rating });
  const setDecrement = () => dispatch({ type: SET_DECREMENT, payload: rating });
  const setInitial = () => dispatch({ type: SET_INITIAL });

  return {
    name: name,
    text: text,
    rating: rating,
    setName,
    setText,
    setIncrement,
    setDecrement,
    setInitial,
  };
};
