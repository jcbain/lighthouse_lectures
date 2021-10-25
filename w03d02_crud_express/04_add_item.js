const express = require('express');
const morgan = require('morgan');
const port = 8080;

// in-memory database
const pencils = {
  abcd: {
    isSharp: true,
    color: 'purple', 
    type: 'mechanical'
  },
  efgh: {
    isSharp: false,
    color: 'pink',
    type: '#2'
  }
}

// add this id generator
const generateId = () => {
  return Math.floor(Math.random() * 1000) + 1;
}

const app = express();

app.set('view engine', 'ejs')

app.use(morgan('dev')); // middleware to log http requests and errors
app.use(express.urlencoded({ extended: false }))

// Browse => GET /pencils
app.get('/pencils', (req, res) => {
  const templateVars = { pencils }
  res.render('pencils', templateVars)
})

// Read => GET /pencils/:id
app.get('/pencils/:id', (req, res) => {
  const pencilId = req.params.id;
  const pencil = pencils[pencilId];

  if (!pencil) {
    return res.redirect('/pencils')
  }

  const templateVars = { pencil, pencilId }
  res.render('pencil', templateVars) 
})

// Edit => POST /pencils/:id
app.post('/pencils/:id', (req, res) => {
  const id = req.params.id;
  const color = req.body.color;

  pencils[id].color = color;
  res.redirect('/pencils')
})

// Add => POST /pencils
// we're add a new item so there isn't an id so we just need to do post to /pencils
app.post('/pencils', (req, res) => {
  // we already have body parser set up so a new pencil will just be the k/v pairs of req.body
  const newPencil = req.body;
  console.log('newPencil: ', newPencil);

  // so we aren't hanging, we will go ahead and redirect to /pencils
  // res.redirect('/pencils')

  // lets add a form to pencils.ejs
  // so right now, we can see when we add something to our form, we get our newPencil object console.logged
  // our object looks just like our pencil objects. Now we just have to generate a random id

  const id = generateId();
  // now we can just use this randomly generated id to add to our pencils database
  pencils[id] = newPencil;

  // lets just recap what happened. browser made a request to /pencils
  // rendered the template with the form
  // filled out the form with inputs with names corresponding to the appropriate pencil attributes
  // when Add button was click, our post request to /pencils was made and our body was what was filled out in the inputs
  // we then generated a new id and our database was update
  // then redirected to /pencils

  res.redirect('/pencils')
})



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});