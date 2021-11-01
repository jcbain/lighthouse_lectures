const timeFunction = (fun) => {
  const start = new Date().getTime();
  fun();
  const end = new Date().getTime();
  const duration = end - start;
  // console.log(`your function took ${duration}ms to run`)
  return duration
}

timeFunction(() => {
  for(let i = 0; i < 100000000; i++) {
    const obj = {};
  }
})

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
