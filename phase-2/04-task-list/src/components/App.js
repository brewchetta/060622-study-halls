import { useState, useEffect } from 'react'
import TasksContainer from './TasksContainer'
import TaskForm from './TaskForm'

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => setTasks(data))
  }, [])

  function removeTask(taskToDelete) {
    fetch(`http://localhost:3000/tasks/${taskToDelete.id}`, {
      method: 'DELETE'
    })

    const newTasks = tasks.filter(task => {
      return task.id !== taskToDelete.id
    })

    setTasks(newTasks)
  }

  if (tasks.length === 0) {
    return (
      <div className="App">
        <h2>Loading......</h2>
      </div>
    )
  }

  return (
    <div className="App">

      <TaskForm setTasks={setTasks} tasks={tasks} />

      <TasksContainer tasks={tasks} removeTask={removeTask} />

    </div>
  );
}

export default App;

// DONE add a task --> make it persist
// DONE display tasks
// DONE delete tasks
// searchbar for tasks
// add a light and dark mode just for kicks
