// callbacks

// first let's create a higher order function

const timeAFunction = (callback) => {

  const start = new Date().getTime();
  callback();
  const end = new Date().getTime();

  console.log(`the function took ${end - start}ms to run`)
}


timeAFunction(() => console.log('hello'))


const myForEach = (arr, callback) => {
  // for(let i = 0; i < arr.length; i++) {
  //   const elem = arr[i];
  //   callback(elem, i)
  // }

  for(const ind in arr){
    const elem = arr[ind];
    callback(elem, ind)
  }
}

const chickens = ['poulet', 'chicken', 'pollo'];

myForEach(chickens, (val, ind) => console.log(val, ind))

const printValAndIndex = (value, index) => {
  console.log(value, index)
}

myForEach(chickens, printValAndIndex)

