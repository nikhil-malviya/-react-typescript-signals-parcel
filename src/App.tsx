import React from "react";
import { createRoot } from "react-dom/client";
import Counter from "components/Counter";
import CounterDoubled from "components/CounterDoubled";
import CounterTripled from "components/CounterTripled";
import Actions from "components/Actions";

import "./App.css";

const App: React.FC = () => (
  <>
    <Counter></Counter>
    <CounterDoubled></CounterDoubled>
    <CounterTripled></CounterTripled>
    <Actions></Actions>
  </>
);

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
