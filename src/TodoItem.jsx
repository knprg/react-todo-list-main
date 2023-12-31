export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
      <button onClick={() => editTodo(id)} className="btn btn-success">
        Edit
      </button>
    </li>
  )
}