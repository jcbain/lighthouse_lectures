# Web Servers 101

## Objectives
- [ ] Web Servers
- [ ] Express
- [ ] Middleware

## Web server
- just another computer
- serves up information/data

(has data) web server <---> client (wants data)

## TCP 
- persistent connection between client and server
- either party can communicate with one another at any time

## HTTP
- built on top of TCP
- request - response protocol
- client (requests) a resource
- web server (responds) to the request

## Address
- IP address = the home address of a server
- PORT Number (65,535 TCP ports on your machine)

## Request
- every request needs a **verb** and a **path**
- verbs - what do we want to do
  1. GET => retrieve information
  2. POST => send information to the server
- path
  - string
  - `/users`, `/maps`
  - http://localhost:3000/users

## Middleware
- a function that runs between the request and the response
  - ex. parse the incoming request (pull out username and password)
  - `email=j@example.com&password=1234` <= url encoded 
  - body-parser middleware will parse this for us 
  ```js
  {
    email: 'j@example.com',
    password: '1234'
  }
  ```

