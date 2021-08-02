# W03D02 - CRUD with Express

### Objectives
- [ ] Implement CRUD over HTTP with Express
- [ ] Render data fro the user using EJS templates
- [ ] Use forms to submit HTTP requests
- [ ] Explore the Post-Redirect-Get pattern
- [ ] Use Chrome DevTools to see requests and responses
- [ ] Pracitice debugging Express

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

## Our resource

* Pencils
  - isSharp: boolean
  - color: string
  - type: string

## EJS

stands for embedded javascript

What's the difference between `<% %>` and `<%= %>`?
- `<%= %>` will output the javascript
- `<% %>` just for logic but don't want to output