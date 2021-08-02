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


const app = express();

app.set('view engine', 'ejs')

app.use(morgan('dev')); // middleware to log http requests and errors

// Browse => GET /pencils  // we need to differentiate our routes so we update our endpoint to accept a parameter
app.get('/pencils', (req, res) => {
  const templateVars = { pencils }
  res.render('pencils', templateVars)
})

// Read => GET /pencils

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});