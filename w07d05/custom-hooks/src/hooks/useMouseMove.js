// 01 so in this hook, we will
// 01 just move both our state
// 01 and our effect in here
// 01 and just return our position state
// 01 when useMouseMove is called
// 01 we also have a couple of tests
import { useEffect, useState } from "react";

const useMouseMove = () => {
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

  return position;
}

export default useMouseMove;