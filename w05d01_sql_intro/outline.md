## The final piece
After this week, you can call yourselves FULL STACK DEVELOPERS!!!
- server: allows a client to interact with a resource
- front-end: gives a nice interface to connect to our server
- database: where we store our data

## Why databases?
- What was wrong with how we were doing thing before now?
  - we were storing our data in volatile memory
  - any time we reset our server, our data started at square one
- We need something that is always running in the background

## What are databases?
- Just a collection of tables
- What is a table? Well they are everywhere.
- Think of spotify

| Track Title | Artist | Duration |
|-------------|--------|----------|
| Always be my Baby | Mariah Carey | 4:17 |
| Children's Story | Slick Rick | 4:01 |

- and when you look at this you can see that there are relationships in this structure. 
- vertically, you can see that things are categorized
- horizontally, you can see that things are conceptualized

Database speak
- a row = a record
- a column = a field

One thing we will always do, is throw in a unique identifier for each row (record)



## Communicating with a database
- Front end <==> Backend <==> Postgres Database
- Both use TCP but the protocolos on top of them are different
- front-end to backend uses http
- backend to database we use database specific protocols (postgres protocol)
  - postgres:// instead of http://
  - but we are not actually talking to the database
  - instead we talk to an RDBMS (Relational DB Management System)
  - this RDBMS will communicate with the database to retrieve our information
  - for us, this week, we will be using `psql`