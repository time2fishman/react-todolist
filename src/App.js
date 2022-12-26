import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Basic To Do List</h1>
      </header>
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;
