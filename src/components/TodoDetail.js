import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

export const TodoDetail = ({ todo }) => {
    const { removeTodo } = useContext(TodoContext);
    return (
        <div className="container-2">

            <p> { todo.title } </p>
            <button className="btn2" onClick={() => removeTodo(todo.id)}><i className="material-icons">delete</i></button>

        </div>
    )
}
