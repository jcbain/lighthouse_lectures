const pg = require('pg');

const Client = pg.Client;

const config = {
  user: 'sfljbfvz',
  host: 'kashin.db.elephantsql.com',
  database: 'sfljbfvz',
  password: 'z8_NANXGDQ1D6pLTRwKY85GVSE235Xtf',
  port: 5432,
};

// 01 now we need to instantiate a client 
// 01 with our configuration object

const client = new Client(config);

// 02 now this tells our client how to connect but it doesn't actually connect
// 02 to do that we have to do client.connect();

// client.connect();
// 02 and then we run `node cl_query.js`

// 03 we can also pass a callback that will run once we are connected
client.connect(() => {
  console.log('🔌 connected to the db')
});

// 04 so how do we query our database?
// 04 the query method is asynchronous 
// 04 so have to call .then because it only 
// 04 returns a promise which returns our results
// 04 and we can see we get back a Result object

// client.query('SELECT * FROM primates;')
//   .then((results) => {
//     console.log(results);
//   });

// 05 and now we know we are intrested in just
// 05 the rows
client.query('SELECT * FROM primates;')
  .then((results) => {
    console.log(results.rows);
  });

// 06 well now we have a browsing functionality 
// 06 and we want to just use the command line
// 06 to see these results