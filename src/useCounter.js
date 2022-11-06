import { useReducer, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount)=> prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount)=> prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const setValue = (e) => {
    const newValue = parseFloat(e.target.value)
    setCount(newValue)
  };

  return { increment, decrement, reset, setValue, count };
};
