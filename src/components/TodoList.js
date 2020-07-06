import React, {useContext} from 'react'
import { TodoContext } from '../contexts/TodoContext'
import { TodoDetail } from '../components/TodoDetail';

export const TodoList = () => {

    const { todos} = useContext(TodoContext);

    return todos.length ? (
        <div className="container3">

        
                {   todos.map(todo => (
                        <TodoDetail todo={todo} key = { todo.id }/>
                    ))
                }
     
              {/* <p> Things to do 1 </p>
              <button className="btn2"><i class="material-icons">delete</i></button> */}
        </div>
       
    ) : (
        <div className="container-2"> 
        <p> No Things Pending </p>
        </div> 
    )
}
