import './App.css';
// (2) bring in useEffect
import { useEffect, useState } from 'react';


function App() {
  // (5) lets now bring in some state
  const [ counter, setCounter ] = useState(0);
  
  // (1) sometimes it is nice to actually update our document title
  // (1) we can actually do that here. we have access to setting it
  // (1) start up app and we can see that 
  // (1) but this is a side-effect
  // document.title = "hello from our site";

  // (3) useEffect is painfully easy to use
  // (3) just pass it a callback function 
  useEffect(() => {
    // (3) now bring in our side effect
    // (3) and our app won't behave any differently
    // document.title = "hola from our site";
    document.title = `(${counter}) hola from our site`;
    // (5) show that update as well as components on dev tools and effect is there
    // (5) useEffect is called on every single render (keep that in your mind for now)
    console.log('chaged the document title')
    // (4) now, we can see that anything that deviates from our
    // (4) normal flow of our react component, ie. it needs to return
    // (4) will be put in our useEffect
  })


  return (
    <div className="App">
      <h2>useEffect Hook</h2>
      {/* (5)  add the counter to our return */}
      <p>Count: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increment counter</button>
      {/* (5) we may also want to add that counter to our document title */}
    </div>
  );
}

export default App;
