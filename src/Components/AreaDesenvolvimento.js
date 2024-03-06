import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import "../Components/AreaDesenvolvimento.css"


// Define um componente estilizado com a fonte do Google Fonts


function AreaDesenvolvimento() {

    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const addTask = () => {
        if (!task) return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask('');
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        }));
    };

    function deleteTask(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function editTask(id) {
        const newText = prompt("Editar tarefa:");
        if (newText) {
            setTodos(todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, text: newText };
                }
                return todo;
            }));
        }
    }

    return (
        <div className="App">
            <input
                id='camptext'
                type="text"
                maxLength={20}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Adicione uma nova tarefa"
            />
            <button id="adicionar" onClick={addTask}>Adicionar</button>
            <ul>
                {todos.map((todo, index) => (
                    <li className='taskContainer' id='camplistadtarefa' key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => toggleComplete(todo.id)}>
                            {todo.text}
                        </span>
                       {/*  {index < todos.length - 1 && <hr />} */}
                      <div>
                        <button id='editar' onClick={() => editTask(todo.id)}><FontAwesomeIcon icon={faPencil} /></button>
                        <button id='deletar' onClick={() => deleteTask(todo.id)}> <FontAwesomeIcon icon={faTrash} /></button>
                      </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AreaDesenvolvimento;
