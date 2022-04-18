import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadTodos, removeTodosRequest} from './thunk'
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {getTodos,getTodosLoading }from './selectors'

import './styles/TodoList.css';

const TodoList = ({todos = [],
                      onRemovePressed,
                      isLoading,
                      startLoadingTodos}) => {

    useEffect(() => {
        startLoadingTodos();
    },[])

    const loadingMessage = <div>loading...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map((todo) => <TodoListItem todo={todo}
                                                  onRemovePressed={onRemovePressed}
            />)}
        </div>
    )
    return isLoading ? loadingMessage : content;
};


// interacting state, so pass {todos} as props on this function
const mapStateProps = (state) => ({
    isLoading: getTodosLoading(state),
    todos: getTodos(state)
});

// import action and dispatch action with props and pass as props on fn
const mapDispatchProps = (dispatch) => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodosRequest(id)),
})


export default connect(mapStateProps, mapDispatchProps)(TodoList);
