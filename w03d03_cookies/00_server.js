// 01 simple server set up so 
// 01 you all don't have to watch me do this
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 4545;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // serve up static files in the public directory

app.set('view engine', 'ejs');

// 02 lets set up a couple of endpoints
// 02 one /home and one to /about
app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// 03 and now we are going to create the templates
// in views/home.ejs and views/about.ejs

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});