import React from "react";
import AddTodo from "./AddTodo";
import TodoListContainer from "../containers/TodoListContainer";
import "./TodoApp.css";
import { connect } from "react-redux";

function TodoApp(props) {
  return (
    <div className="todo-app">
      <h2>Список задач - {props.todos.length} шт.</h2>
      <TodoListContainer />
      <AddTodo />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoApp);
