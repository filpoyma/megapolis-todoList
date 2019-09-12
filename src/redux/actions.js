import { ADD_TODO, DEL_TODO, DONE_TODO, EDIT_TODO} from './actionTypes'
import idGenerator from 'react-id-generator';


export const addTodoAC = content => ({
    type: ADD_TODO,
    payload: {
        id: idGenerator(),
        content: content,
        done: false,
        onedit: false,
    }
});

export const delTodoAC = content => ({
    type: DEL_TODO,
    payload: {
        id: content,
    }
});

export const doneTodoAC = content => ({
    type: DONE_TODO,
    payload: {
        id: content,
    }
});

export const editTodoAC = (content) => ({
    type: EDIT_TODO,
    payload: {
        id: content.id,
        content: content.value,
    }
});
