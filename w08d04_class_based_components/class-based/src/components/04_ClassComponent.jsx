import { Component } from 'react';
// 1 so how do we get state
// 1 or data that this Component owns
// 1 lets think back to our classes
// 1 to get our own state, we need to call
// 1 the constructor
class ClassComponent extends Component {
  // 4 we can allso pass props into the construtor
  // 4 in case we need to derive some state from our 
  // 4 props
  constructor(props) {
    // 2 and here we have to call
    // 2 this.state and it is always and object
    // 2 but what is this error?
    // 2 we've seen this before
    // this.state = {
    //   counter: 0,
    // }

    // 3 we just have to call the parent's 
    // 3 constructor before calling our own
    super(props);
    this.state = {
      counter: 0,
    }
    // 6 now how can we include this in the render?

  }

  render() {
    return (
      <div>
        <h2>The Class-based Component</h2>
        <p>{this.props.someProp}</p>
        {/* 7 same as props */}
        <p>counter: {this.state.counter}</p>
        {/* 8 but what if i wanted to update state? */}
      </div>
    )
  }

}

export default ClassComponent;