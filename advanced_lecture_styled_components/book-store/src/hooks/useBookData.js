import { useEffect, useState } from 'react';

const useBookData = (defaultTitle) => {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
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
      setBooks(response.items);
      setLoading(false);
    })
    .catch(err => {
      setLoading(false)
      setError(true)
    })

  }, [title, author])

  return { books, authorValue, titleValue, setAuthorValue, setTitleValue, handleSearch,  loading, error }
}

export default useBookData;