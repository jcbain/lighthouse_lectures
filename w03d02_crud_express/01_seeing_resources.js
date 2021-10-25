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

app.set('view engine', 'ejs') // set when engine error shows up

app.use(morgan('dev')); // middleware to log http requests and errors

// Browse => GET /pencils
app.get('/pencils', (req, res) => {
  // server side rendering via EJS
  // res.render takes in a template as well as an object full of values that we want to pass to the template
  // makes sense to name the template after what you are view so we can just call this pencils (it doesn't have to be the same name as the endpoint)
  
  // res.render('pencils', {})

  const templateVars = {
    // pencils: pencils
    pencils
  }

  res.render('pencils', templateVars)
  // Error: no default engine was specified
  // res.render says, hand off these template vars to the template using some engine (be it ejs, pug, handlebars, ...)
  // express say, you didn't provide me with a templating engine so please provide me one
  // so we are going to specify above, app.set('view engine', 'ejs')
  // but currently, we don't have ejs install so we're going to have to install it `npm i ejs`

  // alright restart server and refresh /pencils
  // different error, which is good! We solved one issue. 
  // Error: Failed to look up "pencils" in views directory
  // ejs will automatically look for our templates in views, well let's create that
  // we also told it that we wanted to use a template called pencils but we don't have that file yet // so we create it
  // restart the server to see if our errors are gone
  // but did it successfully load? 
  // morgan can tell us (200 good!)
  // but so can devtools
  // go to network tab, which by default only records when you are on it
  // show headers -> sent a GET request to /pencils and we got a 304 back
  // and now we want to see more than just an empty template


  // add the scaffolding for the pencils template
  // since we aren't making any changes to the server
  // and every time we make a request to /pencils res.render is run
  // so we should just be able to refresh and see our changes in the template
  // take a look at the header and the response
  // talk about the aligator tags and the difference
  // loop through the thoughts and carefully describe what is happening

  // debrief on how this response is happening
  // once we put in the url to /pencils
  // it goes to the server file and goes top down
  // finds the first with the request type and route name 
  // then executes the code inside there // i (express) am going to call your callback
  // we se a res.render a template and we pass that template some variables
  // we send that template with the plugged in variables back to the browser (the client)


})


app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});