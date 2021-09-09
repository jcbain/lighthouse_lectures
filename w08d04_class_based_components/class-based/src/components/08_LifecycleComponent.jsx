import { Component } from "react";

// 1 so what about this last componentWillUnmount?
class LifecycleComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  componentDidMount(){
    console.log("The component mounted")

  }
  
  componentDidUpdate(prevProps, prevState){
    console.log('the component has updated');
  }


  // 2 this is sort of like the return of 
  // 2 our useEffect callback where we can do 
  // 2 some cleanup like sever a socket connection
  // 2 clear an interval etc..
  componentWillUnmount(){
    // 2 let's just console.log that the component will 
    // 2 unmount
    console.log('component will unmount')
  }
  // 3 hmm but we are never currently causing an unmount
  // 3 yarn add react-router-dom
  // 3 and we go to app.js

  render() {
    return (
      <div>
        <h2>Life Cycle Component !!!!</h2>
        <input
          value={this.state.searchTerm}
          onChange={(event) => this.setState({searchTerm: event.target.value})} 
        />
        <p>search term: {this.state.searchTerm}</p>
      </div>
    )

  }
}

export default LifecycleComponent;