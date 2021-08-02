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

// Read => GET /pencils/:id
// /ideas/abcd
// /ideas/efgh
// ...
app.get('/pencils/:id', (req, res) => {
  // express actually collects these key value pairs coming in from the request
  // req.params is an object and we can see our id parameter
  const pencilId = req.params.id;
  // now we can retrieve a given pencil
  const pencil = pencils[pencilId];
  // console.log(pencil)

  // now we want to throw our pencil we go back into some template vars
  // const templateVars = { pencil };
  // res.render('pencil', templateVars) // what would be the error at this point

  // create the pencil.ejs
  // refresh and see the single pencil
  // what happens if we plug in an idea that doesn't exist?
  // Error: cannot read property <something> of undefined
  // our single pencil is undefined

  // for today, let's just say that if we don't find a pencil
  // then we can redirect them back to /pencils
  if (!pencil) {
    // res.redirect('/pencils') // this alone will still throw an error in the terminal, the behavior in the browser is good
    return res.redirect('/pencils')
  }

  const templateVars = { pencil }
  res.render('pencil', templateVars) // what would be the error at this point

  // take break if time
  // when return make sure we are making a way for user to navigate without url hacking
  // after you put it in for pencils.ejs show elements tab and how the path was dynamically rendered
  // anchor tags can only make GET requests

})

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});