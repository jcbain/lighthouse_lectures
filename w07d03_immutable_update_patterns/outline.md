## Outline

- today we are going to continue our journey with `state` in React.
- this will be an extension of what we talked about yesterday


## Getting started
- ask if they have seen `npx create-react-app` 
  - if not, show them and start there
- today we are going to be building out parts of an app for a restaurant
- We will call the restaurant Ancho and it will be like Chipotle but better

## Recap the creation of a component
- create a `<Header />` component
- give it a `title` prop to make it dynamic
- give it a `message` prop
- now our component is dynamic where I can pass in values to make this more useable

## Create a counter
- let's create a burrito counter so that a customer can specify how many burritos they want
- create `<BurritoCounter />`
- talk about anonymous inline functions or named functions for event handlers
  - if doing one thing, just have an anonymous function
  - doing multiple things, pull it out to a named function
- demonstrate infinite rerenders by invoking function pass to event handler

## Stale state
- what if we wanted to update state multiple times in the same function call?
- numBurritos is the same value on each setNumBurritos
- react batches state updates that happen close to one another
- we can use the callback to give us back the previous value

## Immutability
- create `immutable.js`
- demonstrate how objects and arrays are mutable
- don't ever want to mutate the value directly becuase React wants to see that there is a difference in the value otherwise it won't update
- show python tutor

- shallow copy with the spread operator

## Burrito component
- create `<Burrito />` component
- let's extend this idea to a Burrito component.
- the idea here is to let the user type in the ingredients that they want in their burrito and to be able to push that to a list of ingredients
- talk about mapping through elements
- talk about two way inputs. We want to the user to be able to modify the state when they type and we can programmatically change it through the value attribute

- bring in more state and talk about how conceptually a burrito can really be a single value with multiple keys



