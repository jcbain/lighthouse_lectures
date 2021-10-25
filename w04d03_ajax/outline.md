## History lesson
- the internet used to work in the same way as your tiny app
- refresh was super popular because any updates could only be reflected upon refresh
- this was problematic for Microsoft because it had Outlook which didn't adhere to the same rigidity of req, res
- microsoft wanted to bring this behavior to the browser
  - *what if we could request data without refreshing the browser*
  - *what if we handled that in our javascript*

## AJAX
- Asynchronous JavaScript and XML
- XML was what Microsoft was using for encoding data
- show XML and JSON
- allows to load up a page and then asynchronously load up data and populate a page with the return from a fetch
- all done purely through javascript

## XHR (XMLHttpRequest) Object
- enter in the XHR object
- you've probably noticed this XHR/Fetch tab in our network dev tools
  - all of our ajax can be logged here
- what is the XHR object?
- http://youmightnotneedjquery.com/
  - first we create a request object
  - then we define where we want to make the request
  - then what to do with the response
  - then we send the request off
- enter jQuery and the super simple interface
  - where do we want to make our request and what do we do with the response

## Simple server
- run through server
- talk about how we can serve up static files in a directory
- talk about `/api/` data convention
- start the server up
  - talk about how `express.static` will serve up an index as a get request to `/`
  - check out our data by making browser request to endpoint



