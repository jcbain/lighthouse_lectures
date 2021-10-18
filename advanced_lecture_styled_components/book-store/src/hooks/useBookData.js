import { useEffect, useState } from 'react';

const useBookData = (defaultTitle) => {
  const [ books, setBooks ] = useState({data: [], loading: true, error: false});
  const [ title, setTitle ] = useState(defaultTitle);
  const [ author, setAuthor ] = useState("");
  const [ titleValue, setTitleValue ] = useState(title);
  const [ authorValue, setAuthorValue ] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    setTitle(titleValue);
    setAuthor(authorValue)
  }
  useEffect(() => {
    const searchAuthor = author ? `+inauthor:${author}` : "";

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}${searchAuthor}&country=CA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then(response => response.json())
    .then(response => {
      setBooks({
        ...books,
        data: response.items,
        loading: false
      })
    })
    .catch(err => {
      setBooks({
        ...books,
        error: true,
        loading: false
      })
    })

  }, [title, author])

  return { books, authorValue, titleValue, setAuthorValue, setTitleValue, handleSearch }
}

export default useBookData;