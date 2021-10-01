// 01 so we can actually generalize
// 01 this parttern into its own hook
// 01 so that we can capture the value
// 01 as well as create a function to
// 01 handle when the input has changed
import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value)
  }
  // 02 it also means we can provide functionality
  // 02 to clear the input if we want to
  // 02 or notuse
  const clearValue = () => {
    setValue("");
  }

  return {value, onChange, clearValue};
}

export default useInput;