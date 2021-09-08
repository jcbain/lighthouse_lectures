import { Component } from 'react';


// 1 so let's take a step back for a second
// 1 one of the main differences with functional 
// 1 components is that it get's run, tells the dom
// 1 what to render and then get's thrown away
// 1 however, with class since it is a special 
// 1 object, it lives in memory until it is unmounted (removed from the dom)
class ClassComponent extends Component {
  // 2 okay so we we talking about props
  // 2 how do we use them in our class-based?

  render() {
    return (
      <div>
        <h2>The Class-based Component</h2>
        {/* 3 how might we accept a prop down here? */}
        {/* 3 well the class gives us props which is an object */}
        <p>{this.props.someProp}</p>
        {/* 4 now naturally, how do we handle state */}
      </div>
    )
  }

}

export default ClassComponent;