import React, { useState } from "react";
import './App.css';
import AddTodo from "./AddTodo";
import List from "./List";

function App() {
  const[todos, setTodos] = useState([])

  function addTodo(index){
    const newTodos = [...todos, index]
    setTodos(newTodos)
  }
  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;
