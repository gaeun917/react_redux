export const CREATE_TODO = 'CREATE_TO';
export const REMOVE_TODO = 'REMOVE_TODO';


export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: {text},
})

export const removeTodo = (text) => ({
    type: REMOVE_TODO,
    payload: {text},
})