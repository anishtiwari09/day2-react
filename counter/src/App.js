import "./styles.css";
import { useState } from "react";
export default function App() {
  let i = 1;
  console.log("update", i + 1);

  let [counter, setCounter] = useState(0);
  const handleClick = (val) => {
    console.log(counter);
    setCounter(counter + val);
    console.log("click");
  };
  console.log("click", counter);
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleClick(1)}>Increment</button>
      <button onClick={() => handleClick(-1)}>Decrement </button>
    </div>
  );
}
