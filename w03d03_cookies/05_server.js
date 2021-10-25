// 01 we now want to register and login 
// 01 a user based off of an email and password
// 01 so we need a couple of endpoints
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const pageText = require('./data/languages.json');

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 
app.use(cookieParser());

app.set('view engine', 'ejs');

// 02 how about we start with just rendering
// 02 the corresponding html for these pages
app.get('/register', (req, res) => {
  res.render('register');
});

// 02 and for login and let's just create
// 02 those templates
app.get('/login', (req, res) => {
  res.render('login');
});
// 03 and once we create those forms, let's take 
// 03 a look at them after starting up the server

// 04 now we need a way to actually handle 
// 04 the submitted forms so we need some post 
// 04 requests


app.post('/login', (req, res) => {});

app.post('/register', (req, res) => {});


app.get('/home', (req, res) => {
  console.log(req.cookies);

  const selectedLanguage = req.cookies.language || "eo";
  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  }
  res.render('home', templateVars);
});

app.get('/about', (req, res) => {
  const selectedLanguage = req.cookies.language || "eo";
  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  }
  res.render('about', templateVars);
});


app.get('/languages/:language_code', (req, res) => {
  const languageCode = req.params.language_code || "eo";

  res.cookie('language', languageCode); 
  res.redirect('/home')
})


app.listen(port, () => {
  console.log(`app listening on ${port}`);
});