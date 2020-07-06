import React, { useState, createContext, useEffect }  from 'react';


export const TodoContext = createContext();

const TodoContextProvider = (props) => {


    const [todos, setTodo] = useState(
        localStorage.getItem('mytodos') ?  JSON.parse(localStorage.getItem('mytodos')) : []   
    )

    const addTodo = (title, curcnt) => {
        setTodo(todos.concat([{title: title, id: curcnt}]));
    }

    const removeTodo = (id) => {
        setTodo(todos.filter(todo => todo.id !== id))
    }

    useEffect(()=> {
        localStorage.setItem('mytodos', JSON.stringify(todos));
    }, [todos])

    return (
        <TodoContext.Provider value={{todos, setTodo, removeTodo, addTodo}}>
            { props.children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;