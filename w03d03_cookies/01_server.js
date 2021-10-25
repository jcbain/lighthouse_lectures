// 01 let's start up the server and see what we 
// 01 got

// 02 okay, so now out home and about pages
// 02 are rendered in english only
// 02 but i have a file that 
// 02 has these in greetings and abouts 
// 02 in different languages
// 02 show data/languages.json
const express = require('express');
const morgan = require('morgan');

// 03 lets bring in the language data
// 03 json can just be read in as an object
const pageText = require('./data/languages.json');

// 03 as always we can console.log just to make sure
console.log(pageText)


const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // serve up static files in the public directory

app.set('view engine', 'ejs');


app.get('/home', (req, res) => {
  // 04 let's try it out. If we are wanting to 
  // 04 change it the perhaps the language will be
  // 04 a variable
  // 04 lets just start with a hard coded variable
  const selectedLanguage = "eo";
  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  }
  res.render('home', templateVars);
  // 05 now we just need to modify the template home.ejs
});

app.get('/about', (req, res) => {
  // 06 we can do the same thing for the about page
  const selectedLanguage = "eo";
  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  }
  res.render('about', templateVars);
});


app.listen(port, () => {
  console.log(`app listening on ${port}`);
});