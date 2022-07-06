import { useState } from 'react'
import Task from './Task'
import TaskSearch from "./TaskSearch"

function TasksContainer({tasks, removeTask}) {

  const [searchTerm, setSearchTerm] = useState('')

  const filteredTasks = tasks.filter(task => task.content.toLowerCase().includes(searchTerm.toLowerCase()))

  const mappedTasks = filteredTasks.map(task => <Task key={task.id} task={task} removeTask={removeTask} />)

  return (
    <div>
      <h2>Your Tasks:</h2>

      <TaskSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {mappedTasks}
    </div>
  )
}

export default TasksContainer
