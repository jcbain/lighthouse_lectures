import './App.css';
import ClassComponent from './components/05_ClassComponent';
import LifecycleComponent from './components/09_LifecycleComponent';

// 5 we need to bring in all of the great react-router-dom stuff
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

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
      {/* 6 now we will go and create our router */}
      {/* 6 anything in the router is involved in the*/}
      {/* 6 routing process */}
      <Router>
        <nav>
          {/* 7 all links do is update the url */}
          {/* 7 still staying on the same page but it looks */}
          {/* 7 looks like we are navigating (virtual navigation) */}
          <Link to="/lifecycle">Lifecycle</Link>
          <br />
          <Link to="/class">Class Component</Link>
        </nav>

        {/* 8 swith just ensure only one of our components renders at once */}
        <Switch>
          {/* 8 the path says, if the path is lifecycle render this component */}
          <Route path="/lifecycle">
            <LifecycleComponent />
          </Route>
          <Route path="/class">
            <ClassComponent someProp="I'm a prop" />
          </Route>
        </Switch>
        {/* 9 now we have the ability to unmount */}
        {/* 9 so lets demonstrate some cleanup 09_Lifecycle */}

      </Router>

      {/* 3 so how do we call this component? */}
      {/* 3 do we need to call new? no, react doesn't care */}
      {/* 3 looks exactly the same as a functional call */}

      {/* 4 so how do we get props */}
      {/* 4 well same way 03_ClassCoponent.jsx*/}
      {/* <ClassComponent someProp="I'm just a prop!"/> */}
      {/* <LifecycleComponent /> */}
    
    </div>
  );
}

export default App;