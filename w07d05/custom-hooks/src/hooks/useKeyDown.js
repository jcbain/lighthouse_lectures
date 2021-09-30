// 01 now this one is fun
// 01 this one listens for a key
// 01 to be pressed and when it does
// 01 it calls a callback
// 01 lets use it in a sprite

import { useEffect } from "react";

const useKeyDown = (key, cb) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        cb()
      }
    }
  
    window.addEventListener('keydown', handleKeyDown)
  
    return () => window.removeEventListener('keydown', handleKeyDown)
  
  }, [])
}

export default useKeyDown;