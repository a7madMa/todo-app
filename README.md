markdown
Copiar código
# Todo List Application

A simple Todo List application built with React and TypeScript. This app allows users to add, edit, delete, and mark tasks as complete. The application uses localStorage to persist tasks between page reloads.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete
- Persist tasks in localStorage

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
Install dependencies:

bash
Copiar código
npm install
Start the development server:

bash
Copiar código
npm run dev
The app will be running at http://localhost:5173.

Project Structure
plaintext
Copiar código
todo-list-app/

Components
App.tsx
The main component that holds the state and logic for the Todo List application. It renders the TodoForm and TodoList components.

TodoForm.tsx
A form component for adding new tasks. It takes an addTodo function as a prop.

TodoItem.tsx
A component representing an individual task. It provides functionalities for editing, deleting, and toggling the completion status of a task.

TodoList.tsx
A component that renders a list of TodoItem components. It takes the list of todos and functions to handle task interactions as props.

types/index.ts
Defines the TypeScript types used in the application. Currently, it includes the Todo type.

Styling
The styles for the application are defined in styles.css. It includes basic styling for the layout, form, buttons, and task items.

Local Development
Scripts
npm run dev: Starts the development server.
npm run build: Builds the application for production.
npm run preview: Previews the production build locally.
