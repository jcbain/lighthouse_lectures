## Primary keys and Foreign keys
- we kow that there has to be a way to uniquely identify a record (row)
- we use it as a pointer to the record (user id, pokemon id)
  - commonly, we use an auto-incrementing integer (but we don't have to as long as it is unique)

- The only constraint with a foreign key is that they must be of the same type as the field that they hold the relationship with
- so if we are generally tying it to a primary key that we set with `SERIAL` let's take a look at what type of datatype serial is 
  - google "postgres number types"

- A few last notes
  - stay away from composite keys (primary keys made up of multiple fields)
  - hard to work with

## Naming conventions
- field names/table names should be snake_case (sql is case insensitive)
- table names are plural (they are collections of things)
- `id` for primary key
- `foreigntablename_id` for foreign key

## Data Types
- a bit more of a concern about a decade ago when space was more expensive
- when a record is created, even if a value is null, the db sets aside space
- but most of our types are `integer`, `varchar`, `boolean`
- phone numbers? postal (zip) codes? just store them as a string 

## Relationship Types
- one-to-one: 1 record in the first table is related to only 1 record in the second
  - generally useless. why not just combine 
  - perhaps to save space 
    - for example, 1000s of employeed but only admins have access to app so only they need a user name an password
    - instead of creating all the space for null usernames and passwords, you can store in separate table
- one-to-many/many-to-one: 1 record in the first can be related to many in the second
  - most common
  - examples: author to books, manufacturer to car models, artist to albums, cohort to students
- many-to-many: 1 or more records in the first are related to 1 or more records in the second
   - requires a third table (bridge, junction tables)
   - this is effectively 2 1-to-many relationship

## Design Concepts
1. required fields - the record in its initial state (or when it is first created)
  - it might be nice for our users to have an avatar and bio but when they create their account, they will only provide email and password (so perhaps only these should be required)
2. default values - use intelligent defaults to speed up inserts (`NOW()`, `CURRENT_DATE`)
3. calculated fields - field whose value can be derived from one or more fields
  - considered bad practice
  - example `first_name`, `last_name` to get `full_name` column
  - we need to ensure that the integrity is kept on update
4. normalization: reduce redundancy and have a single source of truth (not multiple places)
5. Pull repeated values out
  - for example, if you ask for a city and have people input it well you will end up with a whole buhc of names (Kansas City, KC, KCMO, KCK)
  - instead create a look-up table
  (1, Toronto)
  (2, Calgary)
  (3, Montreal)
  (4, Vancouver)
  - can be used for drop down menus
  - simplifies our queries
6. Try not to delete anything (soft-delete)
  - try an `active` field instead that is a boolean
  - `SELECT * FROM users WHERE active = TRUE;`

## ERD
- Entity Relationship Diagram
- a diagram describing the tables the relationships between them
- BREAKOUT

- build out the erd for them
- lucidchart


chefs table
- id (pk)
- first name
- last name

restaurants
- id (pk)
- chef_id (fk)
- restaurant_type_id (fk)
- restaurant_name
- founding_year
- michelin_stars


restaurant_types
- id (pk)
- type 

This creates a many-to-many relationship (a chef can have many restaurant_types and a restaurant_type can have many chefs)

## New ERD
- any company you want to create an ERD for (spotify)
- what is our first table?
- built out our erd



