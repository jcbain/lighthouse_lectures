# W2D3 Other Data Types

## Today's Objectives
- [] Tidy Data
- [] Tabular data with Pandas (recap)
- [] Reading in Excel files
- [] XML/HTML
- [] JSON

## Today's code

- code for today is in the `./notebooks` directory


## Instructions for running with Docker

1. build the image from the `Dockerfile`

```sh
docker build -t <imagename> .
```

2. Run a container from the built image and expose port 8888

```sh
docker run -it --rm -v ${PWD}/:/src -p 8888:8888 <imagename>
```