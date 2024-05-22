import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Cargar las tareas desde localStorage al iniciar la aplicación
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);


  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    };
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  };

  const editTodo = (id: number, title: string) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, title } : todo)
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    localStorage.setItem('todos', JSON.stringify(todos.filter(todo => todo.id !== id)));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
