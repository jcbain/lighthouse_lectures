# Security


## Preamble

- Today we will be discussing security, issues that still exist in our tiny app currently
- so the imporant things that we are going to go over today are hashing our passwords and cookie encryption
- we will finish up with REST architecture and how we can create our own middleware

## Hashing passwords

- So currently, our database is stored in plain text
- *Do you see an issues with that?*
  - our database might not be publicly available, but storing our passwords as plain text is still putting a lot of faith in the company storing your password
  - sure, we aren't supposed to use the same password for multiple accounts, but we're human and we do
  - now someone from that company can try that password email combination elsewhere or sell it to some hacker
  - also, even if everyone is an angel at that company, that is putting a lot of faith in that their application won't get hacked

- hashing 
  - the plain text is passed to the hashing algorithm and the hashing algorithm outputs a different string (this is know as a hash)
  - This is a one way algorithm, a hashed value cannot be unhashed
  - hashing the plaintext password by itself is a 1:1 algorithm. Every plain text has the same hash
    - this is why we have salt, salt is a random string appended to our password which is then hashed making our hashed password seemingly random

- `bcrypt` / `bcryptjs`
  - show documentation
  - describe how they have an async and sycn way of going about hashing
  - when in doubt, it is perfectly fine to create a script to just play around with some new functionality
  - `touch 00_hashing.js`
  - `npm i bcryptjs` 
  - show how to hash in this file
  - then go to our `server.js` and modify our routes to handle our hashed passwords
  - first do `POST /register` to store our hashed password
  - then `POST /login` to compare our password input to our user's hashed password
  - that is that

## Encryption
- show how we can change a cookie to get into a user
- this should terrify you
- Encryption
  - plain text cookies are very simple to manipulate by users
  - remember a cookie is a key value pair that is stored on the user's browser which means that the user has complete control over the cookie
  - encrypt cookies
  - *encryption*
    - much like hashing, the plain text input is scrambled/transformed by a function
    - however is is 2 way, encrypted strings can be decrypted
  
  - show `cookie-session`
  - `npm i cookie-session`
  - then show `02_server_encrypt.js` for server

## Http vs Https

- Describe a "person in the middle attack"
  - example: hacker uses their device to setup a hotspot that looks like wifi from say "Starbucks"
  - you connect and then all of your information goes to this hacker
  - if our app is using `http` then our content is stored as plain text
  - however `https` encrypts the communication between the sender and the reciever
    - so the person in the middle can still see the information coming over but it is all encrypted
    - we aren't going to do this for this app or in the curriculum, but you just purchase a certificate
      - when a user connects to a webpage, the webpage will send over it TLS (transport layer security) certificate which contains a public key (used for authenticating the server)

## What is REST
- It is a pattern or a way to organize our enpoint structure
- REpresentation State Transfer (state is just data)
- Resource based routes convention

If we break out CRUD and use BREAD
resource: maps

B browse GET  /maps
R read   GET  /maps/:id
E edit   POST /maps/:id
A add    POST /maps
D delete POST /maps/:id/delete

But it also represents the relationships between our resources
for example maps could have pins so your routes would like 

B browse GET  /maps/:mapId/pins

with extended verbiage methods (PUT, PATCH, DELETE)

B browse GET    /maps
R read   GET    /maps/:id
E edit   PATCH  /maps/:id
A add    POST   /maps
D delete DELETE /maps/:id

## Middleware

- middleware are built in functionality that occur between the request and the response




