import React from "react";
import { counter } from "stores/counterStore";

const CounterDoubled: React.FC = () => <h3>Doubled: {counter.value * 2}</h3>;

export default CounterDoubled;
