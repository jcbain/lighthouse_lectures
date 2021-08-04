const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
// first thing we have to do is bring in bcrypt
const bcrypt = require('bcryptjs')

// then we have to think about what routes are currently using a plaintext password
// i think a logical place to start is where we are doing the storing of passwords
// the post route /register

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
app.use(cookieParser());

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
  const userId = req.cookies.userId;

  if (!userId) {
    return res.status(401).send('you are not authorized to be here')
  }

  const user = users[userId];

  if (!user) {
    return res.status(400).send('you have an old cookie! git gud!')
  }
  
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

  // found the user, now does their password match?
  // so, now our passowrd in our users database is hashed which means
  // user.password here is a hashed string which is not going to 
  // match the password we take in from the login form.

  // so we use bcrypt to compare
  bcrypt.compare(password, user.password, (err, success) => {
    // if the password doesn't match the user's password
    if (!success) {
      return res.status(400).send('password doesnt match')
    }

    res.cookie('userId', user.id)
    res.redirect('/protected')
  })
  
  // if (user.password !== password) {
  //   return res.status(400).send('password does not match')
  // }

  // // happy path
  // res.cookie('userId', user.id);

  // res.redirect('/protected')

})

// start with hashing passwords here!!!
// right now, wer are taking in three inputs from our 
// post route
// the email, plaintext password and a super secret that we are 
// trusting our application with
app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const superSecret = req.body.superSecret

  if (!email || !password) {
    return res.status(400).send('email and password cannot be blank');
  }

  const user = findUserByEmail(email);

  if (user) {
    return res.status(400).send('the email address is alread in use')
  }

  const id = Math.floor(Math.random() * 1000) + 1;

  // so here we can use our async callbacks
  // first we generate the salt
  // once we get back the salt, we can pass it
  // to the .hash method which will deliver a 
  // hashed password once it completes
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      // now we can actually store our hashed password
      // in the users database instead of the plaintext password
      users[id] = {
        id, 
        email,
        password: hash,
        superSecret
      }

      // how bout we console.log users here just to take a look
      console.log(users)

      // then, since this is asynchronous 
      // we should bring up our redirect so it waits until
      // we've created our new user with a hashed password

      res.redirect('/')
    })
  })

  // how might we do this synchronously, just so we know because of your assignment
  // const salt = bcrypt.genSaltSync(10);
  // const hash = bcrypt.hashSync(password, salt);
  // users[id] = {
  //   id, 
  //   email,
  //   password: hash,
  //   superSecret
  // }

  // console.log('users sync', users)
  // res.redirect('/')

  // now, what is the issue?
  // well, in our login, we are still checking the password against plaintext
})

app.post('/logout', (req, res) => {
  res.clearCookie('userId');
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})