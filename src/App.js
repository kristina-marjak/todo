import { useState } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import ToDoActions from './ToDoActions';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    setTodos((currentToDos) => [
      ...currentToDos,
      {
        text,
        isChecked: false,
        isDeleted: false,
        id: currentToDos.length,
      },
    ]);
  };

  const deleteToDo = (id) => {
    setTodos((currentToDos) =>
      currentToDos.map((todo) =>
        todo.id === id ? { ...todo, isDeleted: true } : todo
      )
    );
  };

  const toggleToDo = (id) => {
    setTodos((currentToDos) =>
      currentToDos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const clearCheckedTodos = () => {
    setTodos((currentToDos) => currentToDos.filter((todo) => !todo.isChecked));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-header">to do</h1>
        <ToDoInput onAdd={addToDo} />
        <ToDoList todos={todos} onDelete={deleteToDo} onToggle={toggleToDo} />
        <ToDoActions onClearAll={clearAllTodos} onClearChecked={clearCheckedTodos} />
      </header>
    </div>
  );
}

export default App;