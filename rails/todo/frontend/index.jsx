import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import { ReactReduxContext } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import { allTodos } from './reducers/selectors';
import Root from './components/root';
document.addEventListener("DOMContentLoaded" , () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})

window.store = configureStore();
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;
// this.state = {
//   storeState: store.getState(),
//                    ^^here
//   store
// }