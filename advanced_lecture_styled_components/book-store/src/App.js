import { useState } from 'react';

import useBookData from './hooks/useBookData';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { light, dark } from './themes'
import GlobalStyle from './components/GlobalStyles';
import Header from './components/Header';
import Welcome from './components/Welcome'
import BookCard from './components/BookCard';
import BookSearch from './components/BookSearch';

import BooksContainer from './components/BooksContainer';


function App() {
  const { books, authorValue, titleValue, handleSearch,setAuthorValue, setTitleValue } = useBookData("robot");
  const [ theme, setTheme ] = useState('light');

  const selectedTheme = theme === 'light' ? light : dark;

  const bookCards = books.data.map((book, i) => {
    const imageLink = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "images/nopic.png";
    return (<BookCard 
      key={i}
      img={imageLink}
      title={book.volumeInfo.title}
      authors={book.volumeInfo.authors}
    />)
  })
  
  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyle />
        <Router>
          <Header theme={theme} setTheme={setTheme}/>
          <Welcome />
          <BookSearch 
            authorValue={authorValue} 
            titleValue={titleValue} 
            setAuthorValue={setAuthorValue} 
            setTitleValue={setTitleValue} 
            handleSearch={handleSearch}
          />
          <BooksContainer>
            {!books.loading && !books.error && (
              bookCards
            )}
          </BooksContainer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
