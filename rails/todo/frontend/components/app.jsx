import React from "react";
import { Provider } from 'react-redux';
import Root from './root';
import TodoListContainer from '../components/todos/todo_list_container';
import TodoFormContainer from './todo_list/todo_form_container';

const App = ( {store} ) => {
    return (
        <div>
        <TodoListContainer />
        <TodoFormContainer />'
        </div>
    )
}





export default App;