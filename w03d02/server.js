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
app.post('/pencils', (req, res) => {
  const newPencil = req.body;

  const id = generateId();
  pencils[id] = newPencil;

  res.redirect('/pencils')
})

// Delete => POST /pencils/:id/delete
app.post('/pencils/:id/delete', (req, res) => {
  const id = req.params.id;
  delete pencils[id];

  res.redirect('/pencils')

})



app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});