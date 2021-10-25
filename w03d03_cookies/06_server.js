// 01 now we need to make our login
// 01 and register post routes
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

// 06 so this function will take in an email
// 06 and return the user object that that email belongs
// 06 to if they exist
// 06 otherwise it will return null
const findUserByEmail = (email) => {
  // 06 if we find the user, we will break
  // 06 out of the function early
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
  // 02 let's pull those values submitted 
  // 02 off of the form into their own variables
  const email = req.body.email;
  const password = req.body.password;

  // 03 now we need to look up the user
  // 03 to see if they exist
  // 03 so we are going to need some 
  // 03 in memory data

  // 04 the first thing we want to check
  // 04 is if they provided an email and 
  // 04 a passowrd
  if(!email || !password){
    // 04 we'll send back a bad request sent
    return res.status(400).send('email or password cannot be blank');
  }

  // 05 now we need to find the user by email
  // 05 to see if the email provided by the client
  // 05 matches a user in our database
  // 05 let's create a helper function becuase 
  // 05 finding a user will probs come up again in registration

  // 07 and now we can use this function
  const user = findUserByEmail(email); // either we get back a user or null
  // 07 and then we want to see if that 
  // 07 that user actually exists (or doesnt exist)
  if(!user){
    return res.status(400).send('no user with that email is found')
  }
  // 07 and we can try these out

  // 08 so if we make it all the way down here
  // 08 then we found the user
  // 08 now we need check the password
  if(user.password !== password) {
    return res.status(400).send('password does not match')
    // 08 and now we can check this
  }

  // 09 and if we get down here
  // 09 well everything lines up and the
  // 09 user can log in
  // 09 now we want to set a cookie
  // 09 and we will set the cookie to their id
  res.cookie('user_id', user.id);
  // 09 now we can find this user in 
  // 09 subsequent requests
  // 09 and then finally redirect them to 
  // 09 /secrets which we will have to set up
  res.redirect('/secrets');

});

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