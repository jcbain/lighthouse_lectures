// 01 there is still one tiny issue
// 01 what happens if we don't have a cookie?
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const pageText = require('./data/languages.json');


console.log(pageText)

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 
app.use(cookieParser());

app.set('view engine', 'ejs');


app.get('/home', (req, res) => {
  console.log(req.cookies);
  // 02 well we can use the logical or to 
  // 02 set a default
  // 02 what this does is say if req.cookies.language
  // 02 is truthy, then set selectedLangauge to that value
  // 02 otherwise set it to "eo"

  const selectedLanguage = req.cookies.language || "eo";
  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  }
  res.render('home', templateVars);
});

app.get('/about', (req, res) => {
  // 03 and do it for the about as well
  const selectedLanguage = req.cookies.language || "eo";
  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  }
  res.render('about', templateVars);
});


app.get('/languages/:language_code', (req, res) => {
  // 04 and there we have it time for break
  const languageCode = req.params.language_code || "eo";

  res.cookie('language', languageCode); 
  res.redirect('/home')
})


app.listen(port, () => {
  console.log(`app listening on ${port}`);
});