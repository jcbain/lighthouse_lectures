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

### Routes

* A route is made up of a **VERB** and a **PATH**.
* Verbs: **GET**, **POST**, **PUT**, **PATCH**, **DELETE**
* Path: `example.com`**/resource**, `example.com`**/resource/:id**

### Forms vs Anchor Tags
* Anchor tags (`<a></a>`) only make `GET` requests
  * Anchor tags are generally used to link between websites or to different pages on the same site
* Forms can make either `GET` or `POST` requests (specified in the form's `method` attribute)
  * Forms are used to collect and submit user information
* If data is being retrieved, use a `GET` request
* If data is being updated/changed/created, use a `POST` request (therefore, a form)
  * NOTE: This includes things like buttons to delete a resource (simply wrap the button in a form)

### Useful Links
* [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [BREAD/CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://github.com/expressjs/express)
* [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
* [Body-Parser](https://github.com/expressjs/body-parser)
* [Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [HTTP Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)