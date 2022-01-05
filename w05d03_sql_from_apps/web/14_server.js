// 00 let us import it first

const express = require('express');
const morgan = require('morgan');
// 01 right here
const { getAllPrimates, getPrimateById } = require('./database/13_queries');

const app = express();
const port = process.env.PORT || 5678;

app.use(morgan('dev'));

app.get('/primates', (req, res) => {
  getAllPrimates((primates) => {
    res.json(primates);
  })
});

// 02 and now lets configure our route
app.get('/primates/:id', (req, res) => {
  const id = req.params.id;
  // 03 but how do we consume a promise?
  // 03 we need a .then
  getPrimateById(id)
    .then((primate) => {
      res.json(primate);
    })
});

// 04 and there we have it
// 04 a very simple web server that we can 
// 04 connect to our database to retrieve/modify some data
// 04 that our database is holding onto.

// 05 now let's talk about secrets
// 05 we do not want to push our configuration info
// 05 that makes sense so we need somewhere to hide these
// 05 and read them in that doesn't get pushed

// 06 introducing environment variables. This is a value
// 06 that gets injected into your application at runtime

// 07 well we can actually inject variables into our script
// 07 because of our process.env 
// 07 what if I now run
// 07 `PORT=4444 node server.js`

// 08 now we are going to bring in dotenv
// 08 npm i dotenv

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
