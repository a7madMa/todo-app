import React, { useState, useEffect } from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  editTodo: (id: number, title: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    setIsDeleting(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  useEffect(() => {
    if (isDeleting) {
      const timer = setTimeout(() => {
        deleteTodo(todo.id);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isDeleting, deleteTodo, todo.id]);

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'fadeOut' : 'fadeIn'}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave} className='savee'><i className="fas fa-save"></i> Save</button>
        </>
      ) : (
        <span onClick={() => toggleComplete(todo.id)}>{todo.title}</span>
      )}
      <div>
        {!isEditing && (
          <>
            <button className="edit" onClick={handleEdit}><i className="fas fa-pencil-alt"></i> Edit</button>
            <button className="delete" onClick={handleDelete}><i className="fas fa-trash-alt"></i> Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
