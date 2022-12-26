import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import { useState } from 'react'

function App() {
  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Basic To Do List</h1>
      </header>
      <CreateTask newTask={newTask} setNewTask={setNewTask} setTaskList={setTaskList} />
      <TaskList newTask={newTask} taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
