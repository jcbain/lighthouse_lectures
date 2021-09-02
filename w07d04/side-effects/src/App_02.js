import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [ counter, setCounter ] = useState(0);
  
  useEffect(() => {
    document.title = `(${counter}) hola from our site`;
    console.log('chaged the document title')
  })

  // (1) create a new useEffect
  useEffect(() => {
    // (1) here I just want to setup a timeout
    // setTimeout(() => {
    //   console.log(`the current count is ${counter}`)
    // }, 3000)
    // (1) predictably, after three seconds we see our console.log
    // (1) what happens if we cause a rerender with updating our state?
    // (1) again, we see our console.log

    // (2) what happens if it isn't a timeout but an interval
    // (2) will we get a new interval every single rerender?
    // setInterval(() => {
    //   console.log(`the current count is ${counter}`)
    // }, 3000)
    // (2) if we count to three our interval should fire once and then after another three again
    // (2) but what happens if i update our state?
    // (2) all of our intervals are still there :(
    // (2) we don't have control of these previous intervals because they are from a previous render
    // (2) this is what is known as a memory leak
    // (2) if i ran out of memory, my computer would crash. Super bad!!!
    
    // (3) we know that setInterval gives us something to hold onto
    // (3) a handle
    const interval = setInterval(() => {
      console.log(`the current count is ${counter}`)
    }, 3000)
    // (3) and we know we can clear the interval if we pass our handle to clearInterval
    // (3) will this work?
    // clearInterval(interval)
    // (3) because almost as soon as I create the interval, I am clearing it

    // (4) so how do we clean up after ourselves?
    // (4) we don't want a memory leak, but we also don't want to clear the interval immediately
    // (4) react provides us a way, so if our callback function has a function as a return,
    // (4) then react will call that function when it is time to clean up
    // (4) let see that in action
    return () => {
      clearInterval(interval);
      console.log('interval cleared')
    }
    // (4) react provides us a way to clean up after ourselves
    // (4) if i establish a persistent socket connection, i need to sever that socket connect
    // (4) if i start an interval, then i need to clear that interval

  })


  return (
    <div className="App">
      <h2>useEffect Hook</h2>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment counter</button>
    </div>
  );
}

export default App;