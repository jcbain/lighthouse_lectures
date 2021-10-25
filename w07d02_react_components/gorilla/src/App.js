// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';

// let likes = 0;

function App() {
  // const state = useState(0);
  // const likes = state[0];
  // const setLikes = state[1];
  const [ likes, setLikes ] = useState(0);

  const incrementLikes = (event) => {
    setLikes(likes + 1);
    // likes++
    console.log(likes)
  }

  return (
    <div className="App">
      <h1>Gorilla React App</h1>
      {/* created a closure over likes */}
      <p>current number of likes to this site is {likes}</p>
      <button onClick={incrementLikes}>add a like</button>
      <Header message={"Gorilla Sara's Glamourous Gargoyle Gymnasium"} />
      <Header message={"Lisa's Loveable Llama Lounge"} />
      <Header message={"Karl's Killer Kebab Kitchen"} />
    </div>
  );
}

export default App;
