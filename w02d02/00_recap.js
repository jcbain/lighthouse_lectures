// callbacks

// first let's create a higher order function

const myForEach = (arr, callback) => {
  for(let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    callback(elem, i)
  }
}

const chickens = ['poulet', 'chicken', 'pollo'];

myForEach(chickens, (val, ind) => console.log(val, ind))

const printValAndIndex = (value, index) => {
  console.log(value, index)
}

myForEach(chickens, printValAndIndex)

