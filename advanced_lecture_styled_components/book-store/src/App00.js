// 00 let's just start with the basics
// 00 When using a new api, i think 
// 00 it is best to just play around.
// 00 fortunately styled-compnents 
// 00 gives a pretty good initial demo
// 00 which we will go ahead and use
import styled from 'styled-components';

// 01 now we can go ahead and
// 01 apply styles directly 
// 01 to our rendered Button component
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {

  return (
    <div className="App">
      <Button>I'm just a button</Button>
    </div>
  )
}

export default App;