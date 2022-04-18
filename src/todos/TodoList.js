import React from 'react';
import {connect} from 'react-redux';
import {removeTodo} from "./actions";


import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './styles/TodoList.css';


const TodoList = ({todos = [], onRemovePressed}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map((todo, i) => <TodoListItem todo={todo}
                                              id={i}
                                              onRemovePressed={onRemovePressed}/>)}
    </div>
);


// interacting state, so pass {todos} as props on this function
const mapStateProps = (state) => ({
    todos: state.todos,
});

// import action and dispatch action with props and pass as props on fn
const mapDispatchProps = (dispatch) => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
})


export default connect(mapStateProps, mapDispatchProps)(TodoList);
