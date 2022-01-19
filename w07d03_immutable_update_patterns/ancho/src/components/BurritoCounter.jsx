// we are going to need to remember 
// some data from one render to the next
// so we are going to bring in useState
import { useState } from 'react';

const BurritoCounter = () => {
  const [ numBurritos, setNumBurritos ] = useState(0);

  // console.log('i rendered')

  const handleClick = () => {
    // setNumBurritos(numBurritos + 1); // 0 + 1
    // setNumBurritos(numBurritos + 1); // 0 + 1
    // setNumBurritos(numBurritos + 1); // 0 + 1

    setNumBurritos( prev => {
      console.log(prev)
      return prev + 1;
    });
    setNumBurritos( prev => {
      console.log(prev)
      return prev + 1;
    });
    setNumBurritos( prev => {
      console.log(prev)
      return prev + 1;
    });
  }

  return (
    <div>
      {/* <p>you want 0 burritos</p> */}
      <p>you want {numBurritos} burritos</p>
      <button onClick={handleClick}>increment burritos</button>
      {/* infinite rerenders!!! */}
      {/* <button onClick={setNumBurritos(numBurritos + 1)}>increment burritos</button> */}
      {/* <button onClick={() => setNumBurritos(numBurritos + 1)}>increment burritos</button> */}
    </div>
  );
};

export default BurritoCounter;