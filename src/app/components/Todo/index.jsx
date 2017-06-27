import React from 'react';
import './index.scss';

function moreInfo () {
    
}

function deleteTodo () {

} 

const Todo = ({content, idx}) => {
    return (
        <div className="todo">
            <button className="trigger"></button>
            <span className="content">{ content }</span>
            <div className="edit-menu">
                <button className="more" onClick={ moreInfo(idx) }>More</button>
                <button className="delete" onClick={ deleteTodo(idx) }>Delete</button>
            </div>
        </div>
    );
}

export default Todo;