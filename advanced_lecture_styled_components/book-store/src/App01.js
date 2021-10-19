// 00 what we have here is an application
// 00 mean to search for books
// 00 it is a pretty simple application
// 00 and includes concepts that we have already learned
// 00 in terms of react
// 00 however, today we are going to see 
// 00 some of the features of styled components
// 00 and how we an use them to style 
// 00 our app

import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useBookData from './hooks/useBookData';
import { light, dark } from './themes'
import GlobalStyle from './components/GlobalStyles';
import Header from './components/02Header/07index';
import Welcome from './components/Welcome'
import BookCard from './components/BookCard';
import BookSearch from './components/BookSearch';

import "./app.scss"
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
          {/* 01 specifically, we are going to  */}
          {/* 01 to be styling the header component */}
          {/* 01 and the components that make it up */}
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
