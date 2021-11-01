import { useState } from 'react';
// import axios from 'axios';

const NewTodoForm = (props) => {
  const { addTodo } = props;
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value).then(res => {
      setValue("")
    });
  }

  return (
    <form className={'todo-form'} onSubmit={handleSubmit}>
      <label>Got something new todo?</label>
      <input name="todo" value={value} onChange={handleChange} placeholder="write it here"/>
      <button type={"submit"}>Add Todo</button>
    </form>
  )
}

export default NewTodoForm;