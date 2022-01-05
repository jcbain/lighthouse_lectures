// 00 first we bring in the pg package
const pg = require('pg');

// 01 so here we have a choice and for our application
// 01 this week, it really doesn't make a difference
// 01 Client - a single connectio to the rdbms (handles a single connection at a time ie you 
// 01 are working with a free tier db)
// 01 Pool - is a managed group of clients (handles multiple connections at once)

// 02 we will use Client today but that is the only difference
const Client = pg.Client;

// 02 and we need the configuration and put in our config data
// 02 well, since I am connecting to a resource in the cloud
// 02 i need to use what is called a connection string
// 02 aka a URL (go to details in elephantSQL and copy URL )

// 03 this is our connection string
// 03 postgres://usernameString:some_PasswordSt$ing@kashin.db.elephantsql.com/db_name

// 03 the first part `postgres://` is the protocol
// 03 usernameString is the username (anything after / up to the :)
// 03 some_PasswordSt$ing is the password (from : to @)
// 03 kashin.db.elephantsql.com is the host (after the @)
// 03 db_name is the database name (everything after the final / same as user for elephantSQL)
// 03 and we will be connecting on the default postgres port of 5432

const config = {
  user: 'usernameString',
  host: 'kashin.db.elephantsql.com',
  database: 'db_name',
  password: 'some_PasswordSt$ing',
  port: 5432,
};

// 04 now we need to set up our client