const printBio = function(){
  console.log(this)
  console.log(`My name is ${this.name} and I am ${this.color}`)
}

globalThis.name = "james"
globalThis.color = "pink"

const bob = {
  name: "Leopold",
  color: "green",
  printBio
}

printBio();
bob.printBio()

console.log(9999999999999999);
console.log(9007199254740992 === 9007199254740993)
