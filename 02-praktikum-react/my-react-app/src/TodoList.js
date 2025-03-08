import React, { useState } from 'react';
import './TodoList.css';

function TodoItem({ task, onDelete }) {
    return (
      <li className="todo-item">
        <span>{task}</span>
        <button onClick={onDelete} className="delete-btn">Hapus</button>
      </li>
    );
  }
  
  function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
  
    const handleAddTask = () => {
      if (newTask.trim() !== "") {
        setTasks([...tasks, newTask]);
        setNewTask("");
      }
    };
  
    const handleDeleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <div className="todo-container">
        <h2 className="title">Todo List</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Tambah tugas..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="task-input"
          />
          <button onClick={handleAddTask} className="add-btn">Tambah</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <TodoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
          ))}
        </ul>
      </div>
    );
  }
  
export default TodoList;  