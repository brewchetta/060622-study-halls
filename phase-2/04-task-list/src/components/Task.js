function Task({task, removeTask}) {

  function handleDelete() {
    removeTask(task)
  }

  return (
    <p>
      {task.content}
      <button onClick={handleDelete}>Remove</button>
    </p>
  )
}

export default Task
