

// 1 so, for the entire time that this component
// 1 is mounted to the dom, this object exists in memory
// 1 something is going to live in the dom and we
// 1 refer to this as the lifecyle of the component
// 1 and eventually it unmounts and the lifecycle ends

// 2 show this link https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// 2 when a component is first mounted to the dom, we call the constructor only the first time
// 2 then we call the render()
// 2 then react paints the dom, shows everything on the browser
// 2 then componentDidMount() is called
// 2 or do something right after the component has mounted to the dom
// 2 like setup an interval, create a socket connection, fetch data....
// 2 this will only be called one time, right after the component mounts to the dom

// 3 then we have the updating phase of the lifecycle
// 3 our component is already mounted and there was an update
// 3 recieved new props or setState() was called
// 3 render is recalled and then we paint
// 3 then componentDidUpdate() 
// 3 happens every time the component update

// 4 then we get to the end of the life
// 4 the component unmounts from the dom
// 4 and only the componentWillUnmount() method is called
// 4 this is where we will do our clean up

import { Component } from "react";

// 5 we know we want to render something to the dom
// 5 and import it into our app
class LifecycleComponent extends Component {

  // 6 so how do we tap into those life cycle methods?
  // 6 similar to how it searches for a constructor method
  // 6 well, we have to outline those specific methods here
  // 6 lets do it
  componentDidMount(){
    // 7 let's start with the componentDidMount()
    // 7 this will only run once the component mounts
    console.log("The component mounted")
    // 8 this would also be the time when you fetch data
    // 8 axios.get()...
    // 8 kinda like a useEffect with an empty dependency array
  }
  
  componentDidUpdate(){}

  componentWillUnmount(){}

  render() {
    return (
      <div>
        <h2>Life Cycle Component !!!!</h2>
      </div>
    )

  }
}

export default LifecycleComponent;