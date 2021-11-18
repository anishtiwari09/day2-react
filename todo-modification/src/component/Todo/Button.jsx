import styles from "./todo.module.css";

export default function Button({ title, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}
