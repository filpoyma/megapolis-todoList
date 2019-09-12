import React, { Component } from 'react';
import { editTodoAC } from '../redux/actions';
import connect from 'react-redux/es/connect/connect';


class TodoListItemEdit extends Component {

  handleEditLTodo = (event) => {
    let content = {
      id: event.target.id,
      value: this.input,
    };
    this.props.editTodoMethod(content);
  };

  updateInput = (input) => {
    this.input = input.target.value;
  };

  render() {
    const { todo } = this.props;
    return (
      <li className="list-group-item">
        <input type="text" onChange={this.updateInput}
               defaultValue={todo.content}/>
        <button className="todo-list-item-list-edit"
                id={todo.id} onClick={this.handleEditLTodo}>ok
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTodoMethod: (content) => dispatch(editTodoAC(content))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TodoListItemEdit)