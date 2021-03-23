import React, { useEffect, useState } from "react";

function Header({ todos, setTodos, dataList }) {
  const [searchTerm, setSearchTerm] = useState("");

  //Search Function
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!searchTerm) {
        setTodos(dataList);
      } else {
        const searchResult = dataList.filter((todo) => {
          return todo.text.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setTodos([...searchResult]);
      }
    }, 50);
    return () => clearTimeout(delayDebounceFn);
  });

  return (
    <>
      <div className="top-menu">
        <button className="delete-button">Delete</button>
        <button className="edit-button">Edit</button>
        <input
          type="text"
          alt="search"
          name="top_search"
          placeholder="🔍Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </div>

      <div className="header-todolist">
        <h1>TO-DO-Lists</h1>
      </div>
    </>
  );
}

export default Header;
