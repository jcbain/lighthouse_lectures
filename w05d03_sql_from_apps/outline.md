## Before we get started

- we are going to create a database today and peform our BREAD operations with a command line application
- 

## Creating a database

- we are going to be creating a database of primates
- only single table queries today
- we'll be using Elephant SQL (https://customer.elephantsql.com/instance)
- create a new instance and name the database `primates`
- then copy and past table creation and insert queries to create table

## Connecting to the database

- no native drivers for postgres in node (and this makes sense because it is agnostic to what type of database we want to use)
- google `node-postgres` (https://node-postgres.com/)
- so I have to install `node-postgres` (`pg`)
- create packages.json (`npm init -y`)
- now we have to install `npm i pg`

- now we have to go to Features -> Connecting -> scroll down to Programmatic
  - requiring the `pg` package returns to classes (Pool and Client)
  - we then intantiate them with db configuration info

- let's create a command line application
- touch `cl_query.js`
