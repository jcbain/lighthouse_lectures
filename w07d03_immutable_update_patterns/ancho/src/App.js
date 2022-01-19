import './App.css';

import Header from './components/Header';
import BurritoCounter from './components/BurritoCounter';
import Burrito from './components/Burrito';

function App() {
  return (
    <div className="App">
      <Header title="Ancho Burrito Bar" message={"psst...guac is free"}/>
      <BurritoCounter />
      <Burrito />
    </div>
  );
}

export default App;
