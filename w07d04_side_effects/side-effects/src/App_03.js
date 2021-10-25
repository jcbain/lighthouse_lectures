import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [ counter, setCounter ] = useState(0);

  // (1) what if we just bring in a search term state
  const [ searchTerm, setSearchTerm ] = useState('');
  
  // (2) useEffect gives us a way to conditionally run
  // (2) don't worry, it isn't putting them inside of an if
  // (2) we pass in a second argument of an array
  // (2) this is the dependency array... put inside here
  // (2) everything this useEffect depends on
  useEffect(() => {
    document.title = `(${counter}) hola from our site`;
    console.log('chaged the document title')
  }, [counter])
  // (2) so here, we are saying that this useEffect depends on the counter
  // (2) this is one of the powerful things about react
  // (2) in jquery, we would have to tie this functionality to the click of the button
  // (2) but here we are separating out this logic
  // (2) our button the increments our state is declared down below
  // (2) and up here in our useEffect, we are waiting on that state to change
  // (2) the useEffect doesn't care how counter changes, it just runs if it does

  // (3) now we can update this one
  useEffect(() => {
   
    const interval = setInterval(() => {
      console.log(`the current count is ${counter}`)
    }, 3000)

    return () => {
      clearInterval(interval);
      console.log('interval cleared')
    }
    // (3) add counter to dependency array
  }, [counter])
  // (4) and what if we wanted this to run everytime searchTerm changed?
  // (4) just add it to the dependency arrray


  return (
    <div className="App">
      <h2>useEffect Hook</h2>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment counter</button>
      {/* (1) we add our search term to our jsx */}
      <div>
        <p>search term is: {searchTerm}</p>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)} 
        />
      </div>
      {/* (1) updating state should cause a rerender */}
      {/* (1) every single time our state is update, our useEffects are  */}
      {/* (1) rerunning even though nothing about them is changing */}
    </div>
  );
}

export default App;