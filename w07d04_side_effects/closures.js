let val = 0

const incrementGlobalVal = () => {
  val++
  return val;
}

console.log(incrementGlobalVal())
console.log(incrementGlobalVal())
val = 300
console.log(incrementGlobalVal())
console.log(incrementGlobalVal())
console.log(incrementGlobalVal())

const createIncrementer = () => {
  let value = 0;
  return () => {
    value++;
    return value;
  }
}
const increment = createIncrementer();
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())