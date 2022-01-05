// 00 let's look up dotevn documentation
// 00 and configure it
require('dotenv').config()

// 01 now we need to create a .env file and .gitignore
// 01 at the same level as our package.json

const express = require('express');
const morgan = require('morgan');
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

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
