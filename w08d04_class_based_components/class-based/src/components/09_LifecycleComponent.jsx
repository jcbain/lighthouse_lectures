import { Component } from "react";

class LifecycleComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      // 5 add interval and set to null
      interval: null
    }
  }

  // 1 lets demonstrate some cleanup
  // 1 from when our component mounts
  // 1 lets create an interval
  componentDidMount(){
    console.log("The component mounted")
    // 2 a one second interval

    // 4 but we cant just create a variable
    // 4 because my componentWillUnmount won't have
    // 4 access to it
    // 4 so we save it to stat so we need to add state
    const interval = setInterval(() => {
      console.log('called in the set interval')
    }, 1000)
    // 2 show that we can mount an unmount and
    // 2 now there is a memory leak
    this.setState({interval: interval})

  }
  
  componentDidUpdate(prevProps, prevState){
    console.log('the component has updated');
  }

  componentWillUnmount(){
    console.log('component will unmount')
    // 6 then we have to clear our interval when we unmount
    clearInterval(this.state.interval)

    // 7 so this is a different paradigm class vs functional
  }


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