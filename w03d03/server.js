const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const pageText = require('./data/languages.json');

const app = express();
const port = 4545;

const users = {
  123: {
    id: '123',
    email: 'scully@xfiles.com',
    password: 'abcd'
  }
}

const findUserByEmail = (email) => {
  for(const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user
    }
  }

  return null;
}

const generateRandomId = () => Math.floor(Math.random() * 2000) + 1;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/login', (req, res) => {

  res.render('login');
});

app.get('/register', (req, res) => {

  res.render('register');
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(400).send("no user name or password provided");
  }

  const user = findUserByEmail(email);

  if(user) {
    return res.status(400).send("user already exists with that email");
  }

  const id = generateRandomId();
  users[id] = {
    id, 
    email,
    password
  }
  console.log(users)
  res.redirect('/login')
})

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password) {
    return res.status(400).send("no user name or password provided");
  }

  const user = findUserByEmail(email);

  if(!user) {
    return res.status(400).send("user doesn't exist with that email");
  }

  if(user.password !== password) {
    return res.status(401).send("password doesn't match");
  }

  const id = user.id;
  res.cookie('user_id', id);
  res.redirect('/secrets');
})

app.get('/secrets', (req, res) => {
  const userId = req.cookies.user_id;
  const user = users[userId];

  const templateVars = {
    email: user.email
  }

  res.render('secrets', templateVars);
})


app.get('/home', (req, res) => {
  const selectedLanguage = req.cookies.language || "fr";

  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage], 
    body: pageText.homeBodies[selectedLanguage]
  };

  res.render('home', templateVars);
})

app.get('/about', (req, res) => {
  const selectedLanguage = req.cookies.language || "fr";

  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage], 
    body: pageText.aboutBodies[selectedLanguage]
  };

  res.render('about', templateVars);
})

app.get('/languages/:language_code', (req, res) => {
  const languageCode = req.params.language_code;
  res.cookie('language', languageCode)
  res.redirect('/home')
})

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});