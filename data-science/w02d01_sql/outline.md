## Interacting with your db
- Today you will be running `psql` to talk to your database and write queries
- For lecture today, I have a database in the cloud so I am just going to run my queries there.
  - https://api.elephantsql.com/console/ac45bbc6-5db2-457b-a157-9694401ec634/browser?
  - https://lucid.app/lucidchart/6909d484-ada4-44fc-9c3f-efe569d631a7/edit?beaconFlowId=7E3F56650AD172DF&invitationId=inv_8f197e7c-e9d2-48cc-acd1-a2a4667322f3&page=0_0#
  - It is the exact same syntax


## Our first question
1. List the total number of songs

- how do I count the total number of rows? `COUNT`
- `COUNT` will be our first introduction to an aggregate function in SQL.
  - take these individual points and crunch them together into a single metric
- we just need to provide a column to count but keep in mind if any of them are `null` then that record will not be counted.
```sql

SELECT COUNT(*)
FROM songs;

-- alias the field
SELECT COUNT(*) AS num_songs
FROM songs;

```

## Our second question
2. List the songs with a rating over 9

- how do we filter? `WHERE`
- we use the where clause much like if

```sql
SELECT *
FROM songs
WHERE rating > 9;
```

## Our third question

3. List the albums that have genre of "folk" arranged alphabetically by artist and then by release date newest to oldest.

- we can work up to this incrementally
- there is no guarantee that we are going to get back the same order or records everytime
- so we need to use the `ORDER BY` (default is ascending A - Z for letters 0-9)

```sql
SELECT * 
FROM albums
WHERE genre = 'folk'
ORDER BY artist_name, release_date DESC;
```

## Our fourt question

4. List all of the genres, don't repeat any.
- so we could just `select genre from albums`
- and then we can `order by genre`
- but we realize we are now repeating
- we can actually specify that we only want `DISTINCT` 
  - this generally works when we only specify a single field

```sql
SELECT DISTINCT genre
FROM albums
ORDER BY genre;
```

## Our fifth question
5. List all of the albums along with their songs.

- Now we are are getting into multi-table queries!!
- let's jump back to our erd and when we look at these two tables again
  - we can see that there is a relationship.
  - every song is tied to an album through an `album_id` (this is called a foreign key)
  - it ties this record to a record from another table
- we now have to perform a join
  - when we join, it isn't enough to just say table names
  - we have to specify what to fields connect these two tables

```sql
SELECT *
FROM albums
JOIN songs ON albums.id = songs.album_id;
```

## Our sixth question
6. List all of the albums along with how many songs each album has.
- so, we are kind of extending this previous query now
- but i don't care about all of the details of each song 
- i just want to know how many an album has.
- well, we need to say aggregate this count by this field

```sql
SELECT album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name;
```

## Our seventh question
7. List all of the albums with more than 10 songs.

- first try writing query with `WHERE` clause to show error.
- then go to https://sqlbolt.com/lesson/select_queries_order_of_execution to show the order of execution
- `HAVING` is where we can put an aggregate function (`WHERE` can't handle it) and we get another opportunity here to filter

```sql
SELECT album_name, COUNT(songs.id) AS num_songs
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name
HAVING COUNT(songs.id) > 10;
```

## Our eighth question
8. List **ALL** albums along with their songs
- lets take a look at our eighth query that we wrote
- well if i take that query and then put a `DISTINCT album_name` and count we will see there are fewer albums there than the total number of albums
- that's because the default join is an inner join
  - go to https://sql-joins.leopard.in.ua/
  - or matching records where the two tables overlap (album.id and songs.album_id)
- but if we want to include an album that doesn't have any songs then we need to do a left join
  - `left join` is the `from` table
  - `right join` is the `join` table
```sql
SELECT *
FROM albums
LEFT JOIN songs ON albums.id = songs.album_id;
```

## Our ninth question
9. List albums along with their average song rating.
- lets build up

```sql
SELECT album_name, artist_name, AVG(rating)
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name;

-- with rounding
SELECT album_name, artist_name, ROUND(AVG(rating) * 100) / 100
FROM albums
JOIN songs ON albums.id = songs.album_id
GROUP BY album_name, artist_name;
```

## Our bonus question
Bonus. List albums and songs with ratings higher than their albums average.

- now this is going to look very strange
- but we can actually use a subquery inside our select statement that will run for every single row
  - this subquery can also take advantage of the tables in the FROM and JOIN becuase those run first
-

```sql
SELECT album_name, 
  artist_name, 
  rating,
  (SELECT AVG(rating) FROM songs WHERE songs.album_id = albums.id) 
FROM albums
JOIN songs ON albums.id = songs.album_id
WHERE rating > (SELECT AVG(rating) FROM songs WHERE songs.album_id = albums.id);
```


