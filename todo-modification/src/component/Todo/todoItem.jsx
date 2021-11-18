import Button from "./Button";
import styles from "./todo.module.css";
export default function TodoItem({
  title,
  status,
  handleDelete,
  handleToggle
}) {
  return (
    <div className={styles.div}>
      <div>
        <Button onClick={handleDelete} title="X" />
        <Button onClick={handleToggle} title="toggle" />
        <p>
          {title} - {status ? "Done" : "Pending"}
        </p>
      </div>
    </div>
  );
}
