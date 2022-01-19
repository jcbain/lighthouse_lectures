// const addTwoToNum = function(num){
//   return 2 + num;
// };

// const addTwoToNum = (num) => {
//   return 2 + num;
// };

// const addTwoNum = num => {
//   return 2 + num;
// };

// const addTwoNum = num => 2 + num;
// console.log(addTwoNum(4))




const creatures = ['prairie', 'pippa', 'el chupacabra'];

creatures.forEach((val) => console.log('the creature name is ', val));

const myForEach = (arr, callback) => {
  for (const value of arr) {
    callback(value);
  }
};

const pluralizedCreatures = [];
myForEach(creatures, (value) => {
  const plural = value + 's';
  pluralizedCreatures.push(plural);
})

console.log(pluralizedCreatures);


// const sayHello = function (name) {
//   return `Hi there, ${name}`;
// };

// const sayHello = (name) => {
//   return `Hi there, ${name}`
// }

// const sayGoodbye = function (name) {
//   return `Get out of here, ${name}`;
// };

// console.log(sayGoodbye('Pippa'));

// const yellAtJames = function(anotherFunc) {
//   const statement = anotherFunc("James");
//   return `${statement.toUpperCase()}!!!`;
// };

// const celebrateName = function(name) {
//   return `You are awesome, ${name}`;
// };

// yellAtJames(celebrateName)

// console.log(yellAtJames(function(name) {
//   return `You are awesome, ${name}`;
// }))


// const timeFunction = (fun) => {
//   const start = new Date().getTime();
//   fun();
//   const end = new Date().getTime();
//   const duration = end - start;
//   // console.log(`your function took ${duration}ms to run`)
//   return duration
// }

// timeFunction(() => {
//   for(let i = 0; i < 100000000; i++) {
//     const obj = {};
//   }
// })

// const benchmark = (fun, num) => {
//   const times = [];
//   for(let i = 0; i < num; i++){
//     const duration = timeFunction(fun);
//     times.push(duration);
//   }
//   return times.reduce((prev, curr) => prev + curr) / times.length
// }

// const avgTime = benchmark(() => {
//   for(let i = 0; i < 100000000; i++) {
//     const obj = {};
//   }
// }, 40)

// console.log(avgTime)
// console.log(new Date().getTime())
