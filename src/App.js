
import './App.css';
import React, { useState } from 'react';

const TodoList = () => {
    // Definir el estado de 'tasks' para almacenar las tareas
    const [tasks, setTasks] = useState([]);
    // Definir el estado de 'newTask' para almacenar el valor de la nueva tarea
    const [newTask, setNewTask] = useState('');

    // Función para agregar una nueva tarea
    const handleAddTask = () => {
        // Solo agregar la tarea si no está vacía o compuesta por espacios
        if (newTask.trim() !== '') {
            // Los tres puntos ... que ves en el código son el operador de propagación. 
            // Este operador permite expandir los elementos de un arreglo u objeto en otros contextos, 
            // como listas o parámetros de funciones. 
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


    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>

                        {task}

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
