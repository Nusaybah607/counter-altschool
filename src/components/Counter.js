import React, { useReducer} from "react";
import { useCounter } from "../useCounter";
import { Link } from "react-router-dom";

const Counter = () => {
    const {increment, decrement, reset, setValue, count} = useCounter()
    
    // throw new Error("This is an error")
    return (
        <main className="main">
      <button className="nav-btn">
        <Link  to='/reducer'>Go to reducer counter</Link>
      </button>
      <div className="container">
        <h1>Custom Counter</h1>
          <input
            type="number"
            className="value"
            value={count}
            onChange={(e) => setValue(e)}
            placeholder='0'
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

export default Counter;
