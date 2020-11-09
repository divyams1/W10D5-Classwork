export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO, 
        todo
    };
}

export const receiveTodos = (array) => {
    return {
      type: RECEIVE_TODOS,
      array,
    };    
}