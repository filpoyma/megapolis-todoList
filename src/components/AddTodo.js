import React from "react";
import { connect } from "react-redux";
import { addTodoAC } from "../redux/actions";
import './AddTodo.css'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      errorEmpty: false
    };
  }

  updateInput = input => {
    this.setState({ input, errorEmpty: false });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    if (this.state.input === '') {
      this.setState({ errorEmpty: true });
    } else {
      this.props.addTodoMethod(this.state.input);
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <form className="shadow-sm p-3 mb-5 bg-white rounded  w-25 mt-3"
            onSubmit={this.handleAddTodo}>
        <div>
          <label htmlFor="text">Краткое описание</label>
          <input type="text"
                 className="form-control bg-light borderless"
                 id="inputForm"
                 value={this.state.input}
                 onChange={e => this.updateInput(e.target.value)
                 }/>
          <div className="error-form-msg" >{this.state.errorEmpty && 'Заголовок не может быть пустым'}</div>
          <button type="submit"
                  className="btn mb-2 mt-2 border border-success">

            Создать
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { addTodoMethod: (content) => dispatch(addTodoAC(content)) }
};

export default connect(null, mapDispatchToProps)(AddTodo);

