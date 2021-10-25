// 01 so how do we read the cookie coming from 
// 01 the client on our server?
// 01 well it will come in as req.cookies
// 01 so let's take a look
const express = require('express');
const morgan = require('morgan');
// 03 bring in cookie-parser
const cookieParser = require('cookie-parser');
const pageText = require('./data/languages.json');


console.log(pageText)

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // serve up static files in the public directory
// 03 now use it
app.use(cookieParser());

app.set('view engine', 'ejs');


app.get('/home', (req, res) => {
  // 02 so what do we get when we look at req.cookies?
  console.log(req.cookies);
  // 02 well, we see that this is undefined
  // 02 so we need to bring in cookie parser
  // 02 to pull those cookies out of the header of the request
  // 02 put them in a nice object for us
  // 02 npm i cookie-parser then const cookieParser = require('cookie-parser');

  // 04 now we should be able to see an object
  // 04 where the key is the name of the cookie and the value is cookie's value

  // 04 so now we can use this to set our variable 
  // const selectedLanguage = "eo";
  const selectedLanguage = req.cookies.language;
  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  }
  res.render('home', templateVars);
});

app.get('/about', (req, res) => {
  // 05 and for here as well
  // const selectedLanguage = "eo";
  const selectedLanguage = req.cookies.language;
  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  }
  res.render('about', templateVars);
});


app.get('/languages/:language_code', (req, res) => {
  const languageCode = req.params.language_code;

  res.cookie('language', languageCode); 
  res.redirect('/home')
})


app.listen(port, () => {
  console.log(`app listening on ${port}`);
});