import Button from "./Button";

export default function TodoItem({
  title,
  status,
  handleDelete,
  handleToggle
}) {
  return (
    <div style={{ marginTop: 10 }}>
      <span style={{ margin: 10, padding: 4 }}>{title}</span> -{" "}
      <span style={{ margin: 10, padding: 4 }}>
        {status ? "Done" : "Not Done"}
      </span>
      <Button title="X" onClick={handleDelete} />
      <Button title="Toggle" onClick={handleToggle} />
    </div>
  );
}
