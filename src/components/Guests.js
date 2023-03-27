import "./GuestsStyles.css";
import React, { useState } from "react";

const Guests = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="guests">
      <label for="counter">Guests</label>
      <span id="counter">
      <button type="button" onClick={decrement}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={increment}>
        +
      </button>
      </span>
    </div>
  );
};

export default Guests;
