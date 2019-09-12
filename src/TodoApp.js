import React from "react";
import AddTodo from "./components/AddTodo";
import TodoListContainer from "./containers/TodoListContainer"
import './TodoApp.css'

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h2>Список задач</h2>
      <TodoListContainer />
      <AddTodo />
    </div>
  );
}
