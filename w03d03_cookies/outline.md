# stateless HTTP
- we talked about getting started with http servers and how those servers hold on to some resource
- yesterday we talked about CRUD/BREAD operations for interacting with resources
- today we are going to touch on the last critical area

- HTTP is stateless, which means that the server has no memory. It doesn't ever remember interacting with you previously (nor the millions of others).
- Every request is novel
- But we don't want to login every single request
  - so we need a way around that
  - we need to send some bit of information to send along with every request
  - festival analogy with bracelets
  - cookies are a file that is stored in the browser
  - just a key value pair
  - cookies are specific to their domain

- Jump in to app building
- first language preference cookies
- the user authentication