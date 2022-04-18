import React from 'react';
import './styles/TodoListItem.css';

const TodoListItem = ({todo, onRemovePressed, id}) => (
    <div className="todo-item-container" key={id}>
        <div >
            <div>{id}</div>
            <h3>{todo.text}</h3>
        </div>
        <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button className="remove-button"
                    onClick={() => onRemovePressed(todo.text)}
            >Remove
            </button>
        </div>
    </div>
);

export default TodoListItem;