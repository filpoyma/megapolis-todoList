import React, { Component } from "react";
import { delTodoAC, doneTodoAC, editTodoAC } from "../redux/actions";
import { connect } from "react-redux";

class TodoListItem extends Component {
  handleDelTodo = (event) => {
    this.props.delTodoMethod(event.target.id);
  };

  handleDoneTodo = (event) => {
    this.props.doneTodoMethod(event.target.id);
  };

  handleEditGTodo = (todo) => {
    let content = {
      id: todo.id,
      value: todo.content,
    };
    this.props.editTodoMethod(content);
  };

  render() {
    const { todo, index } = this.props;
    let classNames = "todo-list-item";
    if (todo.done) classNames += " done";
    return (
      <li className="list-group-item">
        {`Задача ${index + 1}: `}
        <span className={classNames}>{todo.content}</span>
        <div
          className="todo-list-item-list-del float-right ml-2"
          id={todo.id}
          onClick={this.handleDelTodo}
        >
          удалить
        </div>
        <div
          className="todo-list-item-list-done float-right ml-2"
          id={todo.id}
          onClick={this.handleDoneTodo}
        >
          {" "}
          сделано{" "}
        </div>
        <div
          className="todo-list-item-list-edit float-right ml-2"
          id={todo.id}
          onClick={() => this.handleEditGTodo(todo)}
        >
          {" "}
          ред{" "}
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delTodoMethod: (content) => dispatch(delTodoAC(content)),
    doneTodoMethod: (content) => dispatch(doneTodoAC(content)),
    editTodoMethod: (content) => dispatch(editTodoAC(content)),
  };
};

export default connect(null, mapDispatchToProps)(TodoListItem);
