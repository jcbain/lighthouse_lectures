const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')
const bcrypt = require('bcryptjs')

const app = express();
const port = 8080;

const users = {
  'abcd': {
    id: 'abcd',
    email: 'scully@xfiles.com',
    password: 'logicOverFeeling',
    superSecret: "maybe Mulder is right"
  },
  'efgh': {
    id: 'efgh',
    email: 'mulder@xfiles.com',
    password: 'password',
    superSecret: "I don't actually believe"
  }
}

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
// app.use(cookieParser());
app.use(cookieSession({
  name: 'session', // name of cookie in the browser / just a string
  keys: ['key1', 'key2'] // used to encrypt and decrypt // no significance to the string
}))
app.use('/', (req, res, next) => {
  const userId = req.session.userId;
  const whiteList = ['/', '/login', '/register'];
  const user = users[userId]

  if(user || whiteList.includes(req.path)) {
    return next()
  }

  return res.status(400).send('you have an old cookie! git gud!')

})


app.set('view engine', 'ejs');




const findUserByEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];
    // if the email we pass matches a user's email
    if (user.email === email) {
      return user;
    }
  }

  // no user found
  return null;
}



app.get('/', (req, res) => {
  res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/protected', (req, res) => {
  // const userId = req.cookies.userId;
  const userId = req.session.userId

  if (!userId) {
    return res.status(401).send('you are not authorized to be here')
  }

  const user = users[userId];

  // if (!user) {
  //  return res.status(400).send('you have an old cookie! git gud!')
  // }
  
  const templateVars = { user }
  res.render('protected', templateVars)
})



app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
    return res.status(400).send('email and password cannot be blank');
  }

  const user = findUserByEmail(email);

  // we didn't find user
  if (!user) {
    return res.status(400).send('no user with that email found')
  }

  // can't do this anymore because our plain text password is not longer being stored
  // instead we have to compare to the hash
  // found the user, now does their password match?
  // if (user.password !== password) {
  //   return res.status(400).send('password does not match')
  // }

  bcrypt.compare(password, user.password, (err, success) => {
    if (!success) {
      return res.status(400).send('password does not match')
    }
    // happy path
    // res.cookie('userId', user.id);
    req.session.userId = user.id
    res.redirect('/protected')
  })
})

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const superSecret = req.body.superSecret;

  if (!email || !password) {
    return res.status(400).send('email and password cannot be blank');
  }

  const user = findUserByEmail(email);

  if (user) {
    return res.status(400).send('the email address is alread in use')
  }

  const id = Math.floor(Math.random() * 1000) + 1;

  // hash the user's password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {

      users[id] = {
        id, 
        email,
        password: hash,
        superSecret
      }

      console.log(users)

      res.redirect('/')
    })
  })

})

app.post('/logout', (req, res) => {
  // res.clearCookie('userId');
  req.session = null;
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})

