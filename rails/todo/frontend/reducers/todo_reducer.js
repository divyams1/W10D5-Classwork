import {merge} from 'lodash';
import { toUnicode } from 'punycode';
import { RECEIVE_TODO, RECEIVE_TODOS, receiveTodo, receiveTodos } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

export default ( state=initialState, action) => {
    Object.freeze(state);
    switch ( action.type ) {
        case RECEIVE_TODO:
            let todo_obj = {};
            let id = action.todo.id; 
            todo_obj[id] = action.todo;
            const new_todo = merge({}, state, todo_obj);
            return new_todo; 
        case RECEIVE_TODOS: 
            const arr = action.array;
            let todos_obj = {};
            arr.forEach( (todo) => {
                todos_obj[todo.id] = todo;
            })
            const new_todos = merge({}, state, todos_obj)
            return new_todos;
        default: 
            return state;
    } 
}



