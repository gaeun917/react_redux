import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addTodosRequest} from './thunk'
import {getTodos }from './selectors'


import './styles/NewTodoForm.css';
//higher order fn : connect()(NewTodoList)


const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}/>
            <button className="new-todo-button"
                    onClick={() => {
                        const isDuplicateText = todos.some(todo => todo.text === inputValue)

                        if (!isDuplicateText) {
                            onCreatePressed(inputValue)
                            setInputValue('')
                        }
                    }}


            >Create Todos
            </button>
        </div>
    );
};
// interacting state, so pass {todos} as props on this function
const mapStateProps = (state) => ({
    todos: getTodos(state),
});

// import action and dispatch action with props and pass as props on fn
const mapDispatchProps = (dispatch) => ({
    onCreatePressed: text => dispatch(addTodosRequest(text)),
})


export default connect(mapStateProps, mapDispatchProps)(NewTodoForm);