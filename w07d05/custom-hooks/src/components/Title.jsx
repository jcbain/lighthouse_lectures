// 01 in this component, we just want to show

import { useEffect, useState } from 'react';
import useDocumentTitle from "../hooks/useDocumentTitle";

const Title = () => {
  // 01 let just say we want to update the 
  // 01 title of our webpage
  // 01 and we will do that every rerender
  // useEffect(() => {
  //   document.title = "a new title"
  // })
  const [title, setTitle] = useState('');

  // 02 now lets create our own hook to do this
  // 02 this hook will take in some input
  // 02 and set it as the title
  useDocumentTitle(title);

  return (
    <div>
      <h1>Totally awesome title component</h1>
      <label>Input a title for your page</label>
      <input 
        value={title}
        // 03 so how do we change this
        // 03 well if we do this we get 
        // 03 an error because we
        // 03 can't call our hooks conditionally
        // onChange={(event) => useDocumentTitle(event.target.value)}
        onChange={(event) => setTitle(event.target.value)}
      />

    </div>
  )
}

export default Title;