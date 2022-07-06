import { useState } from 'react'

function TaskForm({setTasks, tasks}) {

  const [content, setContent] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accepts': "application/json",
      },
      body: JSON.stringify({
        content: content
      })
    })
    .then(res => res.json())
    .then(newTask => setTasks([...tasks, newTask]))
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <input type="submit" value="Add Your New Task" />

    </form>
  )
}

export default TaskForm
