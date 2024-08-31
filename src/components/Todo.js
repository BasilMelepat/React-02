import React, { useState, useEffect } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className="container mt-4">
      <h2>Todo List</h2>
      <form onSubmit={addTask} className="mb-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <button type="submit" className="btn btn-primary">Add Task</button>
        </div>
      </form>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <div>
              <button onClick={() => toggleTask(task.id)} className="btn btn-sm btn-success me-2">
                {task.done ? 'Undo' : 'Done'}
              </button>
              <button onClick={() => deleteTask(task.id)} className="btn btn-sm btn-danger">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;