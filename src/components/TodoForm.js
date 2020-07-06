import React, { useContext, useState } from 'react';

import { TodoContext } from '../contexts/TodoContext';

let id = 3;

export const TodoForm = () => {
    const { addTodo } = useContext(TodoContext);
    const [ text, setText ] = useState('');
    
    return (
        <div className="container">
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Add things here" required/>

            <button className="btn" disabled={text == ''} onClick={()=> {id++; setText('');addTodo(text, id) }} > Add Todo</button>
        </div>
    )
}
