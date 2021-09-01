## Rules for Hooks
- called in the same order (not conditionally/ no `if` statements)
- called inside React functions (components or custom hooks)
- hooks have to start with `use` (compass added this but it is very much true)
  - `use` is just a way to identify a hook to React

## Pure functions
- `touch pure_functions.js`
- can anyone tell me what a pure_function is?
- a function whose output is purely determined by it input and free of any side-effects
- what is a side effect
  - any time the function reaches outside of itself and calls upon/modifies external variables

## useEffect hook
- to get this going, i just created an empty create react app
- let's start playing around in `App.js`
- look at `App_01.js`
- set the title outside of useEffect
- bring in useEffect and move setting document title in there
- bring in state with a counter
- use button to update state
- change document.title to also have counter in it

## using Multiple useEffects and memory leaks
- see `App_02.js`
- similar to useState, we can use multiple useEffects
- we tend to group operations in the same useEffect
  - fetching all data usually goes in its own useEffect
  - updating the title in another
- why, if it always runs on every render, why not just do it all in the same useEffect (hang on to that thought)
- create new useEffect with setTimeout
- discuss memorty leak with setInterval

## Dependencies
- see `App_03.js`
- so right now it makes sense that our useEffects rerun after every rerender because both of our effects rely on the counter
- but what if had more reasons for the component to rerender?
- react gives us a way to conditionally call a useEffect
- introduce dependency array argument
- That is the basics of useEffect
  - if we need clean up, return a function
  - if we want our useEffect to conditionally run, then we add a dependency array

## Infinite loop
- see `App_04.js`
- show scenario and error (maximum depth exceeded)
- show fix of callback and removal of getter from deps array

## Data Fetching
- make sure `vagrant up`
- ~/lighthouse/react/scheduler-api
- `npm start`
- show how we should be able to make GET request in browser `localhost:8001/api/appointments`
- we know this because we can read the README of the api or since it is all written in express, we can dive into the code and check the endpoints
- `localhost:8001/api/appointments`
- `localhost:8001/api/interviewers`
- `localhost:8001/api/days`
- so by this point we need to start getting used to have multiple servers running
  - we'll have our psql server running
  - we'll have our api backend running
  - and our react web-pack dev server running
- now we are going to make our ajax request so that we can consume this data in our app
- do we know what this library is? `axios`
- `yarn add axios` in react application
- why not just use `jquery` since it all ready has ajax built-in
- jquery is huge! There's DOM handling, event handling....
- react does all of that for us but we just need the ajax part
- when starting the react app you may need to specify a new port in `.env` or package json start script: `"PORT=3050 react-scripts start"`
- `App_05.js` and a new component `components/Appointments_01.jsx`
