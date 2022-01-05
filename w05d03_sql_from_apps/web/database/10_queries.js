// 00 so in here, well we need the connection
// 00 so we bring it in
const client = require('./09_connection');

// 01 so now we can run our queries but
// 01 we should wrap them in function so that we can call them

// 02 so, what does this look like?
// 02 well like this...
const getAllPrimates = () => {};
const getPrimateById = (id) => {};

// 03 and then we will just export them out
// 03 so we can use them

module.exports = {
  getAllPrimates,
  getPrimateById
}

// 04, so let's start building those out