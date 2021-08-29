## Preamble
- demo TinyApp
Tiny app is an app that shortens urls (like `bitly` or `goo.gl`)
- show how you can register a user
- create shortened urls
  - https://google.com
- how those short urls then redirect to your desired location
- edit
  - https://yahoo.com
- delete

- We will be performing CRUD operations on some resource
- Create Read Update Delete
- and we are going to do all of this through the use of webservers


## What is a web server
- just another computer
- if I go to google, i am talking to google's server and they are reponding with some resource (like the google homepage)
- what do they do? they serve up some imformation/data
- so the web server controls the data and the client is someone who wants the data 
  - for most of our lives thus far, we have been on the client side
  - we, using our browser have been requesting data from web-servers like google, twitter, homestarrunner (any website)
  - those webpages and data that come along with them come from web servers

- Last week we also played around with a TCP server (snek game)
- persistent connection between a client and server (there was a consistent connection between your computer and vas's computer)
- you were talking down this connection (move up, move down)
- the server was talking back (you ded...)

- Now HTTP is built ontop of TCP, so there will still be a connection established between the client and the server
- But now we are using a different protocol (or set of rules) to communicate with one another
- The client is going to send a request to the webserver
- The web server will respond back with a response

## How do we find a webserver? 
- well, the ip address gives us the home address of a server
- analogy with physical address
- however, a single computer can be running many applications
- so we also need a port number
- so in order for anyone to communicate to us and for us to communicate with anyone, we need to know the ip and the port

## Communicating
- so how does a client communicate with a server?
- it makes a REQUEST
- it is made up with a verb (what do we want to do)
- and a path (what do we want to do it to)
- for this week we only have a limited number of vers
  - GET (i want to see (get) a resource)
  - POST (i want to update a resource)

- path will be to something like `/users` I want to GET all users
- where does the slash come from, well, its everything after the domain (ip address) and port
- http://localhost:8080/users

## Simple Server
create `simple_server.js`

