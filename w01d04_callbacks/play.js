const sayHello = function(name){
  return `Hello, ${name}`;
};

const greeting = sayHello('Lisa');
console.log(greeting);

const yellAtJames = function(anotherFunc){
  const statement = anotherFunc('James');
  return `${statement.toUpperCase()}!!!`;
};

const niceLoudPhrase = yellAtJames(function(name){
  return `You are awesome, ${name}`
})

console.log(niceLoudPhrase)