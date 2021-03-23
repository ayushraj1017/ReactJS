import React from "react";
import "./index.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Forms from "./components/Forms";

const App = () => {
  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todos"))
);
  const [todo, setTodo] = React.useState("");
 

  let dataList = JSON.parse(localStorage.getItem("todos")); //Saving all the datas into the variable dataList

  return (
    <>
      <Header todos={todos} setTodos={setTodos} dataList={dataList} />
      <div className="outer-container">
        <TodoList todos={todos} setTodos={setTodos} />
        <Forms
          setTodos={setTodos}
          todos={todos}
          setTodo={setTodo}
          todo={todo}
        />
      </div>
    </>
  );
};

export default App;
