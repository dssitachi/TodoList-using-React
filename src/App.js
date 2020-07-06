import React from 'react';
import { TodoList } from './components/TodoList';

import './App.css';
import TodoContextProvider from './contexts/TodoContext';
import { TodoForm } from './components/TodoForm';

function App() {
  return (
    <div className="App">

      <h2> TodoList App </h2>
      <TodoContextProvider>

        <TodoForm />


        <TodoList />

      </TodoContextProvider>


    </div>
  );
}

export default App;
