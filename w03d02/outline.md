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