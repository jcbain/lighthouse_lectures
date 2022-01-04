// 00 so it has probably been awhile since
// 00 we've created a command line app
// 00 and used the process.argv

const pg = require('pg');

const Client = pg.Client;

const config = {
  user: 'sfljbfvz',
  host: 'kashin.db.elephantsql.com',
  database: 'sfljbfvz',
  password: 'z8_NANXGDQ1D6pLTRwKY85GVSE235Xtf',
  port: 5432,
};

const client = new Client(config);

client.connect(() => {
  console.log('🔌 connected to the db')
});

// 01 but let's parse out process.argv
// 01 and the first command after `node cl_query.js verb`
// 01 will be the twoth argument
const verb = process.argv[2];

// 02 okay, so it has been awhile since
// 02 we've used switch blocks
// 02 but this is how they are structure
// 02 we are going to check what the verb is
// 02 and use case to run different blocks
switch (verb) {
  case 'browse':
    client.query('SELECT * FROM primates;')
      .then((results) => {
        console.log(results.rows);
        client.end();
      });
    break; // 03 break is here because it will keep trying to run the switch until it gets to the end of the switch block
    
  default:
    console.log('enter a valid verb')
    // 03 we also want a default so we can tell the user to use
    // 03 a valid verb. 
    // 03 and then we want to sever the connection (we won't be doing this part in our apps)
    client.end();
}

// 04 OH NO! Unhandled promise rejection `node cl_query.js browse`
// 04 why? well, client.query() is async but switch is sync so it
// 04 and it kicks off but then we close the connection right after
// 04 so what do we do? we move it into the .then once we get our results back


// 05 now let's do a read operation where we select a 
// 05 a certain row given the id of that row