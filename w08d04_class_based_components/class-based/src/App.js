import './App.css';
import ClassComponent from './components/05_ClassComponent'

// 1 before hooks were introduced in 16.8
// 1 the only way to handle state in components
// 1 was through class-based components
// 1 however, react doesn't care whether our
// 1 components are class of functional, both work
// 2 so now we have to create a new component
// 2 src/components/ClassComponent
function App() {
  return (
    <div className="App">
      <h1>Class-based Components Yay!</h1>

      {/* 3 so how do we call this component? */}
      {/* 3 do we need to call new? no, react doesn't care */}
      {/* 3 looks exactly the same as a functional call */}

      {/* 4 so how do we get props */}
      {/* 4 well same way 03_ClassCoponent.jsx*/}
      <ClassComponent someProp="I'm just a prop!"/>
    
    </div>
  );
}

export default App;