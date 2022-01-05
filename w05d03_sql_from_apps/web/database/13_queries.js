// 00 and lets see how promises will work
// 00 for our getPrimateById function 
const client = require('./16_connection');

const getAllPrimates = (callback) => {
  client.query('SELECT * FROM primates;')
    .then((results) => {
      callback(results.rows);
    });

};

// 01 first let's copy over the query that we have
// 01 but we have a promise and we want to get back
// 01 our result, so we are going to return a promise
// 01 so what line of code generates a promise?
// 01 client.query so will will just return that
const getPrimateById = (id) => {
  return client.query('SELECT * FROM primates WHERE id = $1;', [id])
    .then((results) => {
      // 01 then we can actually wrap what we 
      // 01 want to return in another promise
      // 01 by returning
      return results.rows[0];
    })
};

// 02 and now this is ready to consume in 
// 02 our server...


module.exports = {
  getAllPrimates,
  getPrimateById
}
