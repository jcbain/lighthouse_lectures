## Outline for today
- just a review of all the things you have been learning over this weekend after you midterms
- spin up an application and talk about how to build front-end ui's using React
- we'll also have a brief discussion about closures
- then back two fundemental ideas within React (state and props)

## What is React?
- ask audience and show documentation
- declarative v imperative programming
  - declarative = only define what the final outcome looks like
  - imperative = define "how" to get to the solution 

## Create React App
- how do we get started with developing a react application
- just use the npm package `create-react-app`
- use `npx` instead of using a global install of `create-react-app`
- then create an app `npx create-react-app gorilla`
- differences between `yarn` and `npm`
- start up the app



## Run through the structure of the app (/public)
- .gitignore 
- README.md -- don't need, we can write our own
- public/
  - favicon.ico 
  - index.html
  - manifest.json (just gives instructions on what icon to use given a certain screen size)
  - robots.txt (a set of instructions for robots (search engines like google) on what url strings can be crawled from what user-agents)
  - index.html
    - <div id="root"></div>
    - this is our app's entry point for our application
    - we are serving up this index.html file and our app needs something to grab onto
    - <noscript>: tells people that don't have js on that they need it to run in order for this app to work

## (/src)
- reportWebVitals.js (measures performance) - don't need so we get rid of it 
- setupTests.js - we talk about tests next week so we will go ahead and get rid of this
- logo.svg - don't need 
- App.test.js - testing for next week so bye bye
- index.css - top level styling 
- App.css - styling for App.js

## index.js
- uses the `import` syntax which is not allowed in `node.js` (uses common js syntax)
- how is this possible, well webpack is responsible for our dev environment so can handle transpiling to common syntax
  - handles listening to file changes to rerender the app
  - webpack runs a development server for us
  - builds a development ready version of our application (handles imports and dependencies)
  - runs our application through babel- will transpile our code to javascript that our browser can handle

- now let's inspect our imports in this file
- React
- ReactDOM
- App (bringing in our App)
- show that we don't need to bring in react because of react 17

## React components
- talk about components
- react calls our function and looks for a return
- writing jsx - just a special syntax for declaring a function
- there are rules, we can only have a single return
  - cannot return simbling elements
  - you have to have one parent element

- smallest thing a component can be
- one element ex: <p>just a single element</p>

- why can't we use `class` or `for` (htmlFor) on labels?

## Our first components
- create `src/components`
- create `Header.jsx`
- is a function
- this returns a <header> element with an <h1>
- we need to put it in a parent that is showing up to show ours
- <Header /> is just a function call (syntactic sugar)
- templating with React `{title}`

## Closures
- talk about class really quickly to show how it has memory of it's data
  - we have one object in memory and so we are just updating the key
  - so when we want that value it is the updated value

- but functions don't have memory
- so we need to create a closure (the function remembers what variables were in scope when it was declared)


## State
- show closure example in app (that doesn't work)
- react wants to handle our state changes because it wants to know when to rerender the component
- we give every single closure to react
- useState and desctructuing

- why console.log behind state value because the function is not synchronous


## Props
- data that components get from their parent
- what if i wanted to reuse this header in different components throughout the app?
  - that's the true nature of components, reusability
  - but maybe every header's title shouldn't show up the same for every part of the app
- how do i give information to a function to change it's behavior?
  - parameters
- if i can pass in attributes to html dom elements, well the same concept is true for components
