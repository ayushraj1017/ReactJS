import React from "react";

function Forms({ setTodo, todo, setTodos, todos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().toLocaleTimeString(),
      text: todo,
    };

    todos.push(newTodo);

    setTodos([...todos]);
    setTodo("");
    const temp = JSON.stringify(todos); //convert javascript to json
    localStorage.setItem("todos", temp);
  };

  console.log(todos.text);

  return (
    <>
      <div className="right-menu">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo Lists"
            name="taskName"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            required
          />

          <button type="submit" className="saving-button">
            Click to Save
          </button>
        </form>
      </div>
    </>
  );
}

export default Forms;
