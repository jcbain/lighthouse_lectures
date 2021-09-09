import { Component } from "react";

class LifecycleComponent extends Component {
  // 5 and then we have to setup our constructor 
  // 5 so we can give it it's own data
  // 5 because we need state
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ""
    }
  }

  componentDidMount(){
    console.log("The component mounted")

  }
  
  // 1 now we have componentDidUpdate
  // 1 and this is what is called after changes 
  // 1 are made
  // 1 how can we listen for particular updates
  // 1 well, we get passed previousProps and previousState
  componentDidUpdate(prevProps, prevState){
    // 2 then we obviously access to this.props and this.state
    // 2 so we can compare between the previous and the current
    // 2 so it would be similar to passing a value to the dependency array
    // 2 for example, let's say the a userId prop changed so we have 
    // 2 make a new axios reques
    // if(prevProps.userId !== this.props.userId) {
      //  axios.get(`/api/users/${this.props.userId}`)
    // }
    // console.log(prevState)
    console.log('the component has updated');
  }
  // 3 so lets add some state and a way to modify it
  // 3 perhaps with an input


  componentWillUnmount(){}

  render() {
    return (
      <div>
        <h2>Life Cycle Component !!!!</h2>
        {/* 4 here's our new input */}
        {/* 4 lets just set up */}
        <input
          value={this.state.searchTerm}
          // 4 so this is a a little odd because
          // 4 this will work but we didn't do that whole binding business
          // 4 that's because arrow functions don't create their own this
          // 4 they use the this in scope
          onChange={(event) => this.setState({searchTerm: event.target.value})} 
        />
        <p>serach term: {this.state.searchTerm}</p>
      </div>
    )

  }
}

export default LifecycleComponent;