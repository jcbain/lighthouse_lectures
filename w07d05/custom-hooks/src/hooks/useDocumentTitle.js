import { useEffect } from "react";

const useDocumentTitle = (title) => {
  // 01 now the title that we pass 
  // 01 into this function, 
  // 01 will be used as the document title
  // 01 and if it changes
  // 01 then we will rerun this effect
  useEffect(() => {
    document.title = title;
  }, [title])
}

export default useDocumentTitle;