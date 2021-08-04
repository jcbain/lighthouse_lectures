# W03D04 - Security and Real World http Server

- [ ] hashing passwords and why
- [ ] cookie encryption and why
- [ ] http and https
- [ ] what is REST

## Storing passwords
- we never want to store passwords as plain-text
- passwords should always be hashed
- *hashing*
  - the plain text is passed to the hashing algorithm and the hashing algorithm outputs a different string (this is know as a hash)
  - This is a one way algorithm, a hashed value cannot be unhashed
  - hashing the plaintext password by itself is a 1:1 algorithm. Every plain text has the same hash
    - this is why we have salt, salt is a random string appended to our password which is then hashed making our hashed password seemingly random


## Encrypted cookies
- plain text cookies are very simple to manipulate by users
- remember a cookie is a key value pair that is stored on the user's browser which means that the user has complete control over the cookie
- encrypt cookies
- *encryption*
  - much like hashing, the plain text input is scrambled/transformed by a function
  - however is is 2 way, encrypted strings can be decrypted

