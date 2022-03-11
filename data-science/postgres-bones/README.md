# Postgres Bones

Just an image to start quick start a ephemeral database of songs and albums.

## setup

```sh
docker build -t <image-name> .
```

Create an `.env` in the format of `.env.example` to set up a user, password and dbname. Then start the container and pass this file to set these environment variables.

```
docker run --name <container-name> --env-file .env -d -p 5432:5432 <image-name>
```

Then navigate into the container to setup the database which should be in the `/migrations/music.sql`

```sh
docker exec -it <container-name> /bin/bash

```

Then when in the container run psql

```sh
psql -U $POSTGRES_USER -d $POSTGRES_DB

> \i migrations/music.sql
```

On the host environment, if you want to see the ip address of the container for external connections, just run

```sh
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container-name>
```