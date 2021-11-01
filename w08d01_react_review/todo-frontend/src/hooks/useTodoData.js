import { useState, useEffect } from 'react';
import axios from 'axios';

const useTodoData = () => {
  const [todos, setTodos] = useState({
    data: [],
    loading: true,
    err: false
  });

  useEffect(() => {
    axios.get('/api/todos')
      .then(res => {
        const appData = {
          data: res.data,
          loading: false, 
          err: false
        }
        setTodos(appData);
      })
      .catch(err => {
        console.log(err);
        setTodos(prev => (
          {
            ...prev, 
            loading: false, 
            err: true
          }
        ))
      })
  }, [])

  const updateTodo = (id) => {
    return axios.patch(`/api/todos/${id}`)
      .then(res => {
        console.log(res);
        const index = todos.data.findIndex(todo => todo.id === id);
        const selectedTodo = todos.data.find(todo => todo.id === id);
        const updatedTodo = {...selectedTodo, done: !selectedTodo.done}
        const updatedTodos = [...todos.data.slice(0, index), updatedTodo, ...todos.data.slice(index + 1)]
        setTodos(prev => ({...prev, data: updatedTodos}));
      })
  }

  const deleteTodo = (id) => {
    const updatedArray = todos.data.filter((todo) => todo.id !== id);
    console.log('id is', id)
    console.log(todos.data)
    return axios.delete(`/api/todos/${id}`)
      .then(res => {
        console.log(res);
        setTodos(prev => (
          {
            ...prev,
            data: updatedArray
          }
        ));
      })
  }

  const addTodo = (todoValue) => {
    return axios.post("/api/todos", {task: todoValue})
      .then(res => {
        console.log(res)
        setTodos(prev => (
          {
            ...prev,
            data: [...prev.data, res.data]
          }
        ))
      })
  }

 

  return {todos, updateTodo, addTodo, deleteTodo}
}

export default useTodoData;