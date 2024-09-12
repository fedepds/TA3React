/*
TA3
Crear un componente que permita el manejo de una lista de elementos. Descripción:
- Crea un componente llamado TodoList que permita a los usuarios agregar, eliminar y mostrar tareas en una lista.
- Utiliza un input para que el usuario pueda escribir el nombre de la tarea.
- Muestra la lista de tareas en el componente.
- Agrega un botón para eliminar cada tarea de la lista.
*/

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const TodoList = () => {
  // Definir el estado de 'tasks' para almacenar las tareas
  const [tasks, setTasks] = useState([]);
  // Definir el estado de 'newTask' para almacenar el valor de la nueva tarea
  const [newTask, setNewTask] = useState('');

  // Header de la aplicación, solo un bloque decorativo con un logo y enlaces
  <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
          Learn React
      </a>
  </header>

  // Función para agregar una nueva tarea
  const handleAddTask = () => {
      // Solo agregar la tarea si no está vacía o compuesta por espacios
      if (newTask.trim() !== '') {
          // Actualizar el estado 'tasks' agregando la nueva tarea
          setTasks([...tasks, newTask]);
          // Reiniciar el campo de entrada de nueva tarea
          setNewTask('');
      }
  };

  // Función para eliminar una tarea según su índice
  const handleDeleteTask = (index) => {
      // Crear una copia del array de tareas
      const updatedTasks = [...tasks];
      // Eliminar la tarea en el índice correspondiente
      updatedTasks.splice(index, 1);
      // Actualizar el estado 'tasks' con las tareas restantes
      setTasks(updatedTasks);
  };

  // Renderizado del componente
  return (
      <div>
          {/* Campo de entrada para agregar nuevas tareas */}
          <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
          />
          {/* Botón para agregar la tarea */}
          <button onClick={handleAddTask}>Add Task</button>

          {/* Lista de tareas */}
          <ul>
              {tasks.map((task, index) => (
                  <li key={index}>
                      {/* Mostrar la tarea */}
                      {task}
                      {/* Botón para eliminar la tarea */}
                      <button onClick={() => handleDeleteTask(index)}>Delete</button>
                  </li>
              ))}
          </ul>
      </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
