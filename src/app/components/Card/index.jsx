import React from 'react';

import './index.scss';

import Todo from '../Todo/index.jsx';

const Card = ({ todos, title, setting }) => {
    return (
        <div>
            <header className="card-header">
                <span className="card-name">{ title }</span>
                <span className="card-todo-number">{ todos.length }</span>
            </header>
            {
                todos.map( (todo, idx) => 
                    <Todo 
                        content={todo.content}
                        idx={idx}
                    />
                )
            }
        </div>
    );
};

export default Card;