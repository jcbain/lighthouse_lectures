// what is a pure function?
// no side-effects
// always returns the same things given the same arguments
// output is deterministic

// this function will always return the same value given the same
// initial state (or arguments)
const addTwo = (num) => {
  const result = num + 2;
  return result;
}

// what is a side-effect - when a function reaches outside of
// itself to do something
// whats the most common side effect
// console.log we are interacting with standard out to print the value
const addThree = (num) => {
  const result = num + 3;

  console.log(result);
  return result;
}

// what about if we took the addition value and put it outside of the function
// that would be a side effect
const additionValue = 4;
const addFour = (num) => {
  const result = num + additionValue;
  return result;
}

// how about this scenario
// here, i am reachout of the function and setting a value
let someValue = 2;
const addFive = (num) => {
  const result = num + 5;
  someValue++;
  return result;
}

// we engage with side-effects a whole lot in react.
// so much so that one of the primary hooks that it provides us 
// with is the useEffect hook which handles are side-effects of
// a component