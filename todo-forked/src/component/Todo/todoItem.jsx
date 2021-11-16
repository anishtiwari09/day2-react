import Button from "./Button";

export default function TodoItem({
  title,
  status,
  handleDelete,
  handleToggle
}) {
  return (
    <div>
      <span>{title}</span> - <span>{String(status)}</span>
      <Button title="X" onClick={handleDelete} />
      <Button title="Toggle" onClick={handleToggle} />
    </div>
  );
}
