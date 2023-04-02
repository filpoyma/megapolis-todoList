import React from "react";
import { connect } from "react-redux";
import idGenerator from "react-id-generator";
import TodoListItem from "../components/TodoListItem";
import TodoListItemEdit from "../components/TodoListItemEdit";
import "./TodoListContainer.css";

class TodoList extends React.Component {
  render() {
    console.log("this.props.localTodos", this.props.localTodos);
    return (
      <div>
        {this.props.localTodos.map((todo, index) => {
          return (
            <ul className="list-group" key={idGenerator()}>
              {!todo.onedit ? (
                <TodoListItem todo={todo} index={index} />
              ) : (
                <TodoListItemEdit todo={todo} />
              )}
            </ul>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  localTodos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
