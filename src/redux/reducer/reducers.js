import { ADD_TODO, DEL_TODO, DONE_TODO, EDIT_TODO } from "../actionTypes"
import { crud } from '../../services/actDelDoneEdit'

const initialState = {
  todos: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return { todos: [...state.todos, action.payload], };
    }
    case DEL_TODO: {
      return { todos: crud([...state.todos], action.payload, 'del') }
    }
    case DONE_TODO: {
      return { todos: crud([...state.todos], action.payload, 'done') };
    }
    case EDIT_TODO: {
      return { todos: crud([...state.todos], action.payload, 'edit') };
    }
    default:
      return state;
  }
}
