## Preamble

- yesterday you learned about how you can make the browser and web-server talk to one another via HTTP
- it is common for web-servers to house/have access to some resource that a user might be interested in
   - today we are going to create a resource that our server controls 
   - we are going to create ways that someone outside of our server for them to access this resource


## What is CRUD? 

Crud refers to the ways that a user can interact with a resource

- C => Create
- R => Read
- U => Update
- D => Delete

However, another acronym that you may see thrown around is BREAD

- B => Browse
- R => Read
- E => Edit
- A => Add
- D => Delete

That's what we are going to create today. We're going to set up our BREAD endpoints

## Download dependencies
- `npm init -y`
- `npm i express morgan`
- `touch server.js`

## Build out each route 
- go through each constructor file starting with `00_...` and ending with `05_..`


## Wrap up
- go through your application and demonstrate each letter of a BREAD application
- say how we created an application that acts as an abstraction layer to interact with a resource
- the touch on `post => redirect => get` principle
  - why not just render insted of redirecting?
    - post is about updating data
    - get is about fetching data (so rendering an idea and sending template vars is more of GET action )
    - also redundancy
- Go through objective in readme


## infinite redirect issue
- may not need to touch on but may be asked
- if you url doesn't have a protocol (http or https) then express assumes it is a relative path
- `res.redirect('www.google.com')` -> GET `/u/www.google.com` -> no key corresponding
- `res.redirect(undefined)` -> GET `/u/undefined`

