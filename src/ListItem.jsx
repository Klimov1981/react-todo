import React from 'react';
import './ListItem.css'

export const ListItem = ({ todo, index, onComplete, onRemove }) => {
    return (
        <li className="app__list__item">
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button className="btn btn_success" onClick={() => onComplete(index)}>
                Готово
            </button>
            <button className="btn btn_danger" onClick={() => onRemove(index)}>
                Удалить
            </button>
        </li>
    );
};