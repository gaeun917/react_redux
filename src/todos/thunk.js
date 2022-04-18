import {
    removeTodo,
    createTodo,
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure
} from './actions'

export const loadTodos = () => async (dispatch, getState) => {

    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure);
    }
}


export const addTodosRequest = (text) => async (dispatch) => {

    try {
        const body = JSON.stringify({text});
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body
        });
        const todo = await response.json();
        dispatch(createTodo(todo));

    } catch (e) {
        console.log(e.toString())
    }
}


export const removeTodosRequest = (id) => async (dispatch) => {

    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete',
        });

        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (e) {
        console.log(e.toString())
    }
}