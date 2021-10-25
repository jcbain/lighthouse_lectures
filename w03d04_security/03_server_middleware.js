const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session')
const bcrypt = require('bcryptjs')
// bring in method-override
// this will allow us to take our post
// request sent from our form and transform it
// to a more semantic http method (like put patch or delete)
// const methodOverride = require('method-override')


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
  name: 'session', 
  keys: ['key1', 'key2'] 
}))

// looks for a query parameter at the end
// of your post method in a form like so ?_method=PATCH
// app.use(methodOverride('_method'))

// we can also just write this middleware ourselves
app.use((req, res, next) => {
  console.log(req.query)
  // if there is a query parameter ?_method
  // with a key of _method then we are going to replace
  // the mothod from the form with the value of the _method
  if(req.query._method) {
    req.method = req.query._method
  }
  // reardless if we switch the method lets
  // continue on with the handoff to our route handlers
  next()
})

app.set('view engine', 'ejs');


const findUserByEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
  }

  return null;
}



app.get('/', (req, res) => {
  res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/protected', (req, res) => {
  const userId = req.session.userId;

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

// for this example, let's just say that PATCH were more
// appropriate
// change form route to <form method="POST" action="/login?_method=PATCH">
app.patch('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
    return res.status(400).send('email and password cannot be blank');
  }

  const user = findUserByEmail(email);

  if (!user) {
    return res.status(400).send('no user with that email found')
  }

  bcrypt.compare(password, user.password, (err, success) => {
    if (!success) {
      return res.status(400).send('password doesnt match')
    }

    req.session.userId = user.id

    res.redirect('/protected')
  })

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
  req.session = null;
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})