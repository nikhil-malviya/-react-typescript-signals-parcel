import React from "react";
import { increment, decrement } from "stores/counterStore";

const Actions: React.FC = () => (
  <div>
    <button onClick={(_) => increment()}>Increment</button>
    <button onClick={(_) => decrement()}>Decrement</button>
  </div>
);

export default Actions;
