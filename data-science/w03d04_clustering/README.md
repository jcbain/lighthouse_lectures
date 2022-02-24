# w03d04 - Unsupervised Learning

## Objectives 
- [ ] Types of machine learning (ML)
- [ ] Unsupervised learning use cases
- [ ] Clustering demos
- [ ] kMeans
- [ ] Hierarchical clustering
- [ ] DBScan

## Installing and Running via Docker
1. first build the image

```sh
docker build -t <imagename> .
```

```sh
 docker run --rm -it -v ${PWD}/src:/src -p 8888:8888 <imagename>
```