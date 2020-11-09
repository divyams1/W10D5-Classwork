import React from 'react';

export const TodoListItem = ({todo}) => {
          return (<li>
                <h1> {todo.title} </h1>
                <p> {todo.body} </p>
                <p> {todo.done} </p>
            </li>)
}