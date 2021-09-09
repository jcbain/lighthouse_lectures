import { Component } from 'react';
// 1 so how do we update state
// 1 well, ther is a setState method
// 1 that is a part of the Component class
class ClassComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      // 10 we can test out our merge
      // 10 checkout react components
      name: "james"
    }

    // 7 so in javascript, we can explicitly bind
    // 7 a specific this to our methods
    // 7 what ever we pass to bind become this
    // 7 in this case we want it to be the ClassComponent
    this.increment = this.increment.bind(this)
    // 8 whoa, now if it helps, we just get used to this
  }

  // 2 so let's create our own method here
  // 2 in here, lets call this.setState
  // 2 and we pass it an object reference our key
  // 2 and perform our update
   // 3 now lets create a button
  increment() {
    // this.setState({counter: this.state.counter + 1})
    this.setState((prevState) => ({counter: prevState.counter + 1}) )
    // 6 why is this undefined
    // 6 before we were calling our methods on our instantiated classes
    // 6 however, now we are handing our increment method to the dom
    // 6 for the browser to call
    // 6 there are several ways to solve this

    // 9 okay, one more thing, why aren't we spreading?
    // 9 am i getting rid of my other keys when i do this
    // 9 nope, setState actually merges this with my other state 
    // 9 values. React is doing this so it is only updating
    // 9 the targeted key
  }
 


  render() {
    return (
      <div>
        <h2>The Class-based Component</h2>
        <p>{this.props.someProp}</p>
        <p>counter: {this.state.counter}</p>
        {/* 4 so we create a button and call this.increment */}
        <button onClick={this.increment}>+1</button>
        {/* 5 but there's an error we need to fix first */}
      </div>
    )
  }
}

export default ClassComponent;