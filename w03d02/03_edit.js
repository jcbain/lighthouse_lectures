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
app.use(express.urlencoded({ extended: false })) // we have to specify how we want the body parsed, url encoded is what came through that initial request // you also probably brought in body_parser but express built that in
// extended false, just means we are only sending along primitive types and not objects

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

  const templateVars = { pencil, pencilId } // pass in pencil id here !!!!!!!!!!!!!
  res.render('pencil', templateVars) 
})

// Edit => POST /pencils/:id
// we are editing an existing one so we want to identify the one we are editing
app.post('/pencils/:id', (req, res) => {
  // lets just pull id off of req.params
  const id = req.params.id;
  // lets get the body of what is being sent to us (body is information not sent along with the url)
  // const body = req.body;
  // console.log('body: ', body)

  // then we will also just redirect back to /pencils once we are done
  // res.redirect('/pencils')

  // right now, the only way that we can do this is inside of a form
  // so let's go to pencil.ejs and set that up
  // let's only replace on bit not every attribute, lets say update color
  // input field is how we accept input from a user
  // and we need one critical thing for an input field --> name attribute (when sent to the server this name will be the key)
  // without specifying form method it defaults to a GET to the current route and packages up our input and adds it as query parameters to our url

  // we need to update our form's method attribute (to POST)
  // every form should have a method and an action
  // method is the type of http method in this case we want POST
  // and action will be to this /pencils/id but currently ejs doesn't have access to the "id", we only have access to the single object
  // go up to get route /pencils/:id and add pencilId to template vars
  // now, if we inspect in our browser we can see that our action points to /pencils/abcd

  // now if we press save, it redirected to /pencils
  // and if we look at our terminal, we can see undefined for the body
  // if you ever see the body as undefined, that means that the body parser is not setup

  const color = req.body.color;
  // now we can update out database at that specific location
  pencils[id].color = color;
  // and this should now work
  res.redirect('/pencils')

})


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});