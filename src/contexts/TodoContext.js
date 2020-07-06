import React, { useState, createContext }  from 'react';


export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    const [todos, setTodo] = useState(
        [
            {id: 1, title: 'Todo number 1'},
            {id: 2, title: 'TOdo number 2'}
        ]
    )

    const addTodo = (title, curcnt) => {
        setTodo(todos.concat([{title: title, id: curcnt}]));
    }

    const removeTodo = (id) => {
        setTodo(todos.filter(todo => todo.id !== id))
    }

    return (
        <TodoContext.Provider value={{todos, setTodo, removeTodo, addTodo}}>
            { props.children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;