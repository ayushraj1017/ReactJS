import React from "react";

function TodoList({ todos, setTodos }) {
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  const deleteTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    const temp = JSON.stringify(updatedTodos);
    localStorage.setItem("todos", temp);
  };

  const editTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    const temp = JSON.stringify(updatedTodos);
    localStorage.setItem("todos", temp);
    setTodoEditing(null);
    setEditingText("");
  };

  return (
    <>
      <div className="left-menu">
        {todos.map((todo) => (
          <ul className="todo_style">
            <li>
              {todo.id === todoEditing ? (
                <input
                  type="text"
                  placeholder="edit text"
                  name="edit-input"
                  defaultValue={todo.text}
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <div>{todo.text}</div>
              )}

              <h6>
                <i>{todo.id}</i>
              </h6>
              <div className="buttons-div">
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-button-main"
                >
                  {" "}
                  Delete
                </button>

                {todo.id === todoEditing ? (
                  <button
                    onClick={() => editTodo(todo.id)}
                    className="edit-button-main"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setTodoEditing(todo.id)}
                    className="edit-button-main"
                  >
                    {" "}
                    Edit
                  </button>
                )}
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default TodoList;
