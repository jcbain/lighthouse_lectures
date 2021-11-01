import './App.scss';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import Todo from './components/Todo';
import NewTodoForm from './components/NewTodoForm';
import useTodoData from './hooks/useTodoData';

function App() {
  const { todos, updateTodo, addTodo, deleteTodo } = useTodoData();

  // const [todos, setTodos] = useState({
  //   data: [],
  //   loading: true,
  //   err: false
  // });

  // useEffect(() => {
  //   axios.get('/api/todos')
  //     .then(res => {
  //       const appData = {
  //         data: res.data,
  //         loading: false, 
  //         err: false
  //       }
  //       setTodos(appData);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       setTodos(prev => (
  //         {
  //           ...prev, 
  //           loading: false, 
  //           err: true
  //         }
  //       ))
  //     })
  // }, [])

  // const updateTodo = (id) => {
  //   axios.patch(`/api/todos/${id}`)
  //     .then(res => {
  //       console.log(res);
  //       const index = todos.data.findIndex(todo => todo.id === id);
  //       const selectedTodo = todos.data.find(todo => todo.id === id);
  //       const updatedTodo = {...selectedTodo, done: !selectedTodo.done}
  //       const updatedTodos = [...todos.data.slice(0, index), updatedTodo, ...todos.data.slice(index + 1)]
  //       setTodos(prev => ({...prev, data: updatedTodos}));
  //     })
  // }

  // const addTodo = (todoValue) => {
  //   axios.post("/api/todos", {task: todoValue})
  //     .then(res => {
  //       console.log(res)
  //       setTodos(prev => (
  //         {
  //           ...prev,
  //           data: [...prev.data, res.data]
  //         }
  //       ))
  //     })
  // }

  // const deleteTodo = (id) => {
  //   const updatedArray = todos.data.filter((todo) => todo.id !== id);
  //   console.log('id is', id)
  //   console.log(todos.data)
  //   axios.delete(`/api/todos/${id}`)
  //     .then(res => {
  //       console.log(res);
  //       setTodos(prev => (
  //         {
  //           ...prev,
  //           data: updatedArray
  //         }
  //       ));
  //     })
  // }

  const todoItems = todos.data.map(todo => {
    return (
      <Todo key={todo.id} 
        task={todo.task}
        done={todo.done}
        updateTodo={() => updateTodo(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    )
  })



  return (
    <div className="App">
      <h1>Todo</h1>
      <NewTodoForm addTodo={addTodo}/>
      <section className={'todos'}>
        {todoItems}
      </section>
    </div>
  );
}

export default App;
