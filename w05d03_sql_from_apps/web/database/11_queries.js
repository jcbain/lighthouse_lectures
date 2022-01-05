// 00 well, we just build out our functions
// 00 and luckily for us, we've already done that before
// 00 so we can jsut copy and paste
const client = require('./09_connection');

// 01 now there are a couple of ways that we can handle
// 01 these async operations for once we get the data back
// 01 callbacks and promises
// 01 lets take a look at the callback first
const getAllPrimates = (callback) => {
  client.query('SELECT * FROM primates;')
    .then((results) => {
      callback(results.rows);
    });

};
// 02 and now let's bring that into our server file
// 02 and create a route that will call it...

const getPrimateById = (id) => {};


module.exports = {
  getAllPrimates,
  getPrimateById
}
