import { useReducer } from "react";

const INITIAL_VALUE = {
  name: "",
  text: "",
};

const SET_NAME = "SET_NAME";
const SET_TEXT = "SET_TEXT";
const SET_INITIAL = "SET_INITIAL";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME:
      return {
        ...INITIAL_VALUE,
        name: payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: payload,
      };
    case SET_INITIAL:
      return INITIAL_VALUE;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const setName = (value) => dispatch({ type: SET_NAME, payload: value });
  const setText = (value) => dispatch({ type: SET_TEXT, payload: value });
  const setInitial = () => dispatch({ type: SET_INITIAL });

  const { name, text } = form;

  return {
    name: name,
    text: text,
    setName,
    setText,
    setInitial,
  };
};
