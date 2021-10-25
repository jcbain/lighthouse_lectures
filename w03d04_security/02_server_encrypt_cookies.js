const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
// first we can bring in our new cookie-session and comment out cookie-parser
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

// then we have to use this middleware
// now, the keys here are used to encrypt and decrypt the cookies.
// then we need to actually search for where we are setting the userId cookie
// should be in our POST /login
app.use(cookieSession({
  name: 'session', // name of cookie in the browser / just a string
  keys: ['key1', 'key2'] // used to encrypt and decrypt // no significance to the string
}))

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
  // i only have one in this application
  // but when we do this, it performs the decryption process
  // which means we can get back our plain text key to be able
  // to search the users database
  const userId = req.session.userId;
  // const userId = req.cookies.userId;

  // we can now see that we have an encrypted cookie and it is 
  // much more difficult for me to even understand which cookie
  // belongs to what
  // one more thing we have to do. We have to remove our cookie
  // from logout

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

  bcrypt.compare(password, user.password, (err, success) => {
    if (!success) {
      return res.status(400).send('password doesnt match')
    }

    // now when we set our cookie, we no longer use res
    // what middleware does is it operates in between 
    // the req and the res
    // so now we are handing it to the req to encrypt our plain text
    // and in this action is is doing the res.send
    req.session.userId = user.id
    // res.cookie('userId', user.id)

    // now, this will break but we can still check our cookies that are created
    // you can see that we have a the cookie and the cookie signature
    // if either of those don't match then it is unusable (so just an added layer of security)
    res.redirect('/protected')
  })
  // so now we can see that cookie parser no longer works so
  // so we just need to search everywhere we had req.cookies.userId
  // and replace it with req.session.userId

})


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
  // so instead of using a method
  // we just remove the cookie from the 
  // session object
  // console.log(req.session)
  // and this will handle sending the response
  // back to the client to destroy the session
  req.session = null;
  // res.clearCookie('userId');
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})