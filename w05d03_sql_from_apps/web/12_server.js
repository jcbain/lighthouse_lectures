// 00 okay, well firstwe need to import it

const express = require('express');
const morgan = require('morgan');

// 01 requre here
// 01 and then we need to create a route
const { getAllPrimates } = require('./database/11_queries');

const app = express();
const port = process.env.PORT || 5678;

app.use(morgan('dev'));

// 02, it will be a get route because we are showing data
app.get('/primates', (req, res) => {
  // 02 and then we need to pass it our callback 
  // 02 to say what to do with the rows when 
  // 02 our callback is called
  // 02 and we can decide to do whatever we want
  // 02 but we will just send the primates back as some json
  getAllPrimates((primates) => {
    // res.send
    // res.render
    res.json(primates);
  })
});

// 03 and now theoretically we have connected the pieces
// 03 but let's fire up the server and visit /primates to check

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// 04 now lets do it with promises