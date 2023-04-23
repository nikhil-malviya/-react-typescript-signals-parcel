import { signal } from "@preact/signals-react";

const counter = signal(0);
const increment = () => counter.value++;
const decrement = () => counter.value--;

export { counter, increment, decrement };
