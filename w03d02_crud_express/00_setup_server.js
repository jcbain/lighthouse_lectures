const express = require('express');
const morgan = require('morgan');
const port = 8080;

const app = express();

app.use(morgan('dev')); // middleware to log http requests and errors

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// now with our very small application, let's see if it is working. Start the server.
// if we go to the browser to localhost:8080, we should see 'cannot GET'
// and if we navigate to our terminal, we should see Morgan communicated that request

// Now we need a resource which is where I can use your help
// give me some noun, something that has attributes
// what sort of data structure should we store these in? array or object