import { useState } from "react";
import Button from "./Button";
import styles from "./todo.module.css";
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
    <div className={styles.div}>
      <input
        type="text"
        placeholder="Add SomeThing"
        value={text}
        onChange={handleChange}
        className={styles.input}
      />
      <Button title="+" onClick={handleClick} />
    </div>
  );
}
