## Responsive design
- our applications are capable of responding to differing screen sizes and orientations
- however, currently our applications have only been dealing with absolute values
  - `px`, `in`, `cm`
  - But absolutes are absolutes. Analogy of 300px div on a device that is 300px wide vs a device that is 1800px wide.
  - but perhaps we could take up a relative amount of space???

## Sass
- go to sass documentation
- Sass is what is known as a preprocessor
  - in other words, we write in sass but our browswer doesn't understand it so it needs to be processed to css
- also known as a superset, which means that everything that is in the original is valid in the superset
- we actually have to download sass and we can do that globally
```sh
npm install -g sass
sass --version
```

- the first thing we need to do is create a sass file
```sh
touch newstyles.scss
```