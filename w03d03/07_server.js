// 01 now we need to set up our /secrets get
// 01 route
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const pageText = require('./data/languages.json');

const app = express();
const port = 4545;

// 03 an object of objects for users
const users = {
  123: {
    id: 123,
    email: 'scully@xfiles.com',
    password: 'abcd'
  }
}

const findUserByEmail = (email) => {
  for(const userId in users) {
    const user = users[userId];
    if(user.email === email){
      return user;
    }
  }

  return null;
}

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); 
app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
    return res.status(400).send('email or password cannot be blank');
  }

  const user = findUserByEmail(email); 
  if(!user){
    return res.status(400).send('no user with that email is found')
  }

  if(user.password !== password) {
    return res.status(400).send('password does not match')
  }

  res.cookie('user_id', user.id);
  res.redirect('/secrets');
});

app.post('/register', (req, res) => {});

// 02 we can set up this get route here
app.get('/secrets', (req, res) => {
  // 03 lets take a look at the secrets template
  // 03 from looking at it, we can see that it needs
  // 03 an email from template vars
  
  // 04 so the first thing we want to do is check if
  // 04 the client has a cookie set
  const userId = req.cookies.user_id;

  // 05 so if they don't have a cookie, then
  if(!userId){
    // 05 then we tell them they are logged in
    res.status(401).send('you are not authorized to be here')
  }

  // 06 if they make it down here, then they have a cookie
  // 06 so we need to find their user
  const user = users[userId];
  // 07 and our template needs an email
  // 07 so lets give it the users' email
  const templateVars = {email: user.email}
  res.render('secrets', templateVars)

  // 08 and now we can check this out
  // res.send('hello there') // do this for happy path to see login
})


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