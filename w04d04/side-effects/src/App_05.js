import './App.css';
import { useEffect, useState } from 'react';

import Appointments from './components/Appointments_01';

function App() {

  const [ counter, setCounter ] = useState(0);
  const [ searchTerm, setSearchTerm ] = useState('');

  // useEffect(() => {
  //   setCounter((prevCounter) => prevCounter + 1);
  // }, [])

  

  // useEffect(() => {
  //   document.title = `(${counter}) hola from our site`;
  //   console.log('chaged the document title')
  // })

  // useEffect(() => {
   
  //   const interval = setInterval(() => {
  //     console.log(`the current count is ${counter}`)
  //   }, 3000)

  //   return () => {
  //     clearInterval(interval);
  //     console.log('interval cleared')
  //   }

  // }, [counter])



  return (
    <div className="App">
      <h2>useEffect Hook</h2>
      {/* <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment counter</button>
      <div>
        <p>search term is: {searchTerm}</p>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)} 
        />
      </div> */}
      {/* (01) bring in appointments */}
      <Appointments />

    </div>
  );
}

export default App;