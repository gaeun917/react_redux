import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createTodo} from './actions'



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


            >Create Todo
            </button>
        </div>
    );
};
// interacting state, so pass {todos} as props on this function
const mapStateProps = (state) => ({
    todos: state.todos,
});

// import action and dispatch action with props and pass as props on fn
const mapDispatchProps = (dispatch) => ({
    onCreatePressed: text => dispatch(createTodo(text)),
})


export default connect(mapStateProps, mapDispatchProps)(NewTodoForm);