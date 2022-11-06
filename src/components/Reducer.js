import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === "DECREASE") {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return { ...state, count: 0 };
  }
  if (action.type === "INPUT_VALUE") {
    return { ...state, count: parseFloat(action.payload) };
  }

  return state;
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREASE" });
  };
  const decrement = () => {
    dispatch({ type: "DECREASE" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  const setValue = (e) => {
    dispatch({ type: "INPUT_VALUE", payload: e.target.value });
  };

  return (
    <main className="main reducer">
        <button className="nav-btn">
            <Link to='/'>Go to Custom hook counter</Link>
        </button>
      <div className="container">
        <h1>Reducer Counter</h1>
        <input
          type="number"
          className="value"
          value={state.count}
          onChange={(e) => setValue(e)}
          placeholder="0"
        />
        <div className="count-btns">
          <button onClick={increment}>increase</button>
          <button onClick={reset}>reset</button>
          <button onClick={decrement}>decrease</button>
        </div>
      </div>
    </main>
  );
};

export default Reducer;
