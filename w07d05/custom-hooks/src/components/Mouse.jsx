import { useEffect, useState } from "react";

const Mouse = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

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