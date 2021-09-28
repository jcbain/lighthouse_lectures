// 01 well now we need the post to logout
// 01 because we currently have the button
// 01 and we are not handling that request
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const pageText = require('./data/languages.json');

const app = express();
const port = 4545;

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

// 02 lets add our post to logout
app.post('/logout', (req, res) => {
  // 02 what we want to do is get rid of the cookie
  // 02 we need to ask the browser to get rid of it
  res.clearCookie('user_id'); // this cookie is the same one we set in login
  // 02 and then redirect to /login
  res.redirect('/login')
});


// 03 now we are ready for the register route
// 03 or how do we create a new user
app.post('/register', (req, res) => {
  // 03 much in the same way for login
  // 03 we are taking in the email and password
  // 03 but now we want to add this to our users database
  const email = req.body.email;
  const password = req.body.password;

  // 04 okay, lets first again see if the client
  // 04 passed along an email and password like 
  // 04 we did before
  if(!email || !password){
    return res.status(400).send('email or password cannot be blank');
  }

  // 05 now we need to find if that email passed to
  // 05 this route is in user
  // 05 happy path here is that the user with email
  // 05 doesn't exist
  const user = findUserByEmail(email);
  // 05 if the user exists, well then we don't register
  if(user){
    return res.status(400).send('the email address is already in use')
  }

  // 06 if we get down here, the user doesn't 
  // 06 currently exist so we can register them
  // 06 now we just need to generate a random id
  const id = Math.floor(Math.random() * 2000) + 1;
  
  // 07 then we add to the users object
  users[id] = {
    id,
    email,
    password
  }
  // 08 so we've created the new user, now what to do
  // 08 we can log them in or redirect to login
  // 08 let's redirect to login where they can now
  // 08 login with their new account
  res.redirect('/login')
  // 08 create a new user
  // 08 then login and show the new cookie

  // 09 the last thing is since
  // 09 users are in volatile memory,
  // 09 our old cookies will not apply to a user
  // 09 so we may still have an old cookie if 
  // 09 we kill the server and start it up again
  // 09 causing our secrets page to crash 
  // 09 because that user doesn't exist anymore
  // 09 so let's fix that

});


app.get('/secrets', (req, res) => {
  const userId = req.cookies.user_id;

  if(!userId){
    res.status(401).send('you are not authorized to be here')
  }

  const user = users[userId];

  // 10 we want to check if the user is actually in
  // 10 our database
  if(!user){
    return res.status(400).send('you have an old cookie')
  }
 
  const templateVars = {email: user.email}
  res.render('secrets', templateVars)
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