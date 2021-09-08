// 1 so i am using react 17
// 1 so i don't have to import react
// 1 but i do now have to import something else
// 1 i have to import the Component parent class
// 1 for which i will extend its functionality to
// 1 my component
import { Component } from 'react';

// 2 then we just go on our merry ol way
// 2 we create our component by extending Component 
// 2 class. Now we can take all of the hard work
// 2 of the react developers and add our own little flare on top
class ClassComponent extends Component {

  // 3 now there is something every single
  // 3 class-base component needs and that
  // 3 is their render method. we need to be able 
  // 3 to return jsx
  render() {
    return (
      // 4 this is still jsx
      // 4 nothing has changed here
      // 4 now lets bring it into our app
      <div>
        <h2>The Class-based Component</h2>
      </div>
    )
  }

}

export default ClassComponent;