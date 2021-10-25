// 01 so in this component, we are interested
// 01 in tracking x and y coordinates of our mouse
// 01 to do this, we we are set up a listener 
// 01 for when the mouse moves and off it 
// 01 grab the clientX and clientY 

// import { useEffect, useState } from "react";
import useMouseMove from "../hooks/useMouseMove";

const Mouse = () => {

  const position = useMouseMove();
  // const [position, setPosition] = useState({x: 0, y: 0})
  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setPosition({
  //       x: event.clientX,
  //       y: event.clientY
  //     })
  //   }
  //   document.addEventListener('mousemove', handleMouseMove)
  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove)
  //   }
  // })

  const pointerStyle = {
    position: 'absolute',
    height: '50px',
    width: '50px',
    backgroundColor: 'purple',
    left: position.x -25,
    top: position.y - 50,
    borderRadius: '50%'
  }

  return (
    <div style={{position: 'relative'}}>
      <h1>Mouse Position Component</h1>
      <div style={pointerStyle}></div>
      <p>x position: {position.x}</p>
      <p>y position: {position.y}</p>

    </div>
  )
}

export default Mouse;