import React from 'react';
import {TodoListItem} from '../todo_list/todo_list_item'; 



export default ({ todos= {} }) => {
    const todo_list = todos.map( (todo,idx) => {
        return(
            <TodoListItem key={idx} todo={todo}/>
        )
    })
    return(
    <ul>
        {todo_list}
    </ul>
    )}