export const allTodos = (state) => {
    // debugger
    let keys = Object.keys(state.todos);
    const  todoIds = keys.map(id => state.todos[id]);
    return todoIds;
}


