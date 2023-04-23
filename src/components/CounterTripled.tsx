import React from "react";
import { counter } from "stores/counterStore";

const CounterTripled: React.FC = () => <h3>Tripled: {counter.value * 3}</h3>;

export default CounterTripled;
