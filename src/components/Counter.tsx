import React from "react";
import { counter } from "stores/counterStore";

const Counter: React.FC = () => <h3>Counter: {counter.value}</h3>;

export default Counter;
