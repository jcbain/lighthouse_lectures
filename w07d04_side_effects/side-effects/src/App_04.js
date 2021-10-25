import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [ counter, setCounter ] = useState(0);
  const [ searchTerm, setSearchTerm ] = useState('');

  // (1) we need to set up the scenario of an infinite loop
  useEffect(() => {
    // (1) react should be able to handle this scenario
    // setCounter(counter + 1)
    // (1) if we look, we should see Error of maximum depth exceeded
    // (1) this error message is very helpful

    // (2) can we think of way to get out of this infinite loop scenario?
    // (2) well, we can remove counter from dependency array
    // (2) and use the callback syntax to update our counter
    // (2) if we were depending on counter then we would get a warning if it weren't in deps array
    setCounter((prevCounter) => prevCounter + 1);
  }, [])

  

  useEffect(() => {
    document.title = `(${counter}) hola from our site`;
    console.log('chaged the document title')
  })

  useEffect(() => {
   
    const interval = setInterval(() => {
      console.log(`the current count is ${counter}`)
    }, 3000)

    return () => {
      clearInterval(interval);
      console.log('interval cleared')
    }

  }, [counter])



  return (
    <div className="App">
      <h2>useEffect Hook</h2>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment counter</button>
      <div>
        <p>search term is: {searchTerm}</p>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)} 
        />
      </div>

    </div>
  );
}

export default App;