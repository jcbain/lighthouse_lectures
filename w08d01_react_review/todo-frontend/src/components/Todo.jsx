const Todo = (props) => {
  const { task, done, updateTodo, deleteTodo } = props;
  
  const handleUpdate = () => {
    updateTodo();
  }

  const handleRemove = () => {
    deleteTodo()
  }

  const classStatus = done ? "completed" : ""

  return (
    <div className="todo">
      <h2 className={classStatus}>{task}</h2>
      <button onClick={handleUpdate}>{done ? 'not done?' : 'finished?'}</button>
      <button className={'delete'} onClick={handleRemove}>delete</button>
    </div>
  )
}

export default Todo;