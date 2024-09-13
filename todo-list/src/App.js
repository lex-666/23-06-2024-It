import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './Todoform';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;

