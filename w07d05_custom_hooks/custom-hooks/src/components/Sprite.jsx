// 01 so here is our sprite. 
// 01 essentially i have a sprite
// 01 sheet that has 6 frames to it
// 01 so any time i press a key
// 01 then i want the frame to increase
// 01 and if it is on the last one
// 01 then i want it to start back at the beginning
// 01 lets take a look
import { useState } from 'react';
import './sprite.css'

// import useKeyDown from '../hooks/useKeyDown';

const Sprite = (props) => {

  const {animal} = props;

  const [ frame, setFrame ] = useState(0)
  const [ direction, setDirection ] = useState(1)

  const imgStyles = {
    transform: `scaleX(${direction})`,
    left: -(frame * 48)
  }

  const moveRight = () => {
    setDirection(1)
    setFrame(prev => (
      prev < 5 ? prev + 1 : 0
    ))
  }

  const moveLeft = () => {
    setDirection(-1)
    setFrame(prev => (
      prev > 0 ? prev - 1 : 5
    ))
  }

  // useKeyDown('b', moveRight);
  // useKeyDown('g', moveLeft)

  return (
    <div className="sprite-container">
      <img className="sprite-img" src={`images/${animal}.png`} style={imgStyles}/>
    </div>
  )
}

export default Sprite;