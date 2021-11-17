import { useState } from "react";
import Button from "./Button";
export default function TodoInput({ onCreatTask }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    let update = text;
    setText("");
    return [onCreatTask(update)];
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add SomeThing"
        value={text}
        onChange={handleChange}
      />
      <Button title="Add" onClick={handleClick} />
    </div>
  );
}
