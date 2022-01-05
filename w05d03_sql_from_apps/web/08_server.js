// 00 alright so now we just need to set up a really simple server
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 5678;

app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// 01 okay, so i could bring all of that configuration
// 01 into this file by copy and paste
// 01 but instead, i can just encapsulate all
// 01 of this logic into its own file and just
// 01 read in the pieces that i need

// 02 mkdir database
// 02 touch database/connection.js