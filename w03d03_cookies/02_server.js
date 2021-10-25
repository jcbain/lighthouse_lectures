// 01 but we want the user to choose their
// 01 their language and use that as 
// 01 the determiner of the language
// 01 displayed on these pages
// 01 let's create a new route
const express = require('express');
const morgan = require('morgan');
const pageText = require('./data/languages.json');

console.log(pageText)

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // serve up static files in the public directory

app.set('view engine', 'ejs');


app.get('/home', (req, res) => {
  const selectedLanguage = "eo";
  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  }
  res.render('home', templateVars);
});

app.get('/about', (req, res) => {
  const selectedLanguage = "eo";
  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  }
  res.render('about', templateVars);
});

// 02 lets just make a get route to select
// 02 the languages. This would normally be a
// 02 post with a form but for simplicity sake
app.get('/languages/:language_code', (req, res) => {
  // 03 and in here, we wil set the language 
  // 03 based on the url parameter specified
  const languageCode = req.params.language_code;
  // 03 so now we need to set a cookie with the
  // 03 language preference
  // 03 then we will redirect back to GET /home
  res.cookie('language', languageCode); // we set it here and then we can use it in subsequent requests
  res.redirect('/home');
  // 04 now set up the links to the home page
  // 04 in our ejs

  // 05 and now we should be able to see
  // 05 if a cookie was set in the browser
  // 06 how do we read it on the server
})


app.listen(port, () => {
  console.log(`app listening on ${port}`);
});