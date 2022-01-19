// all primitives are immutable
// in other words, we cannot alter the value 
// of it. 3 is always 3.

// reassigning is different than mutating

// however, objects and arrays are mutable
// in other words we can change their values

const burrito = {
  type: 'bowl',
  vegetarian: true,
  // what happens if i do this?
  type: 'whole wheat tortilla',
  ingredients: ['lettuce', 'black beans']
};

// const copy = burrito;
// we can use the spread operator to copy the object
const copy = {
  ...burrito,
  type: 'flour tortilla',
  ingredients: [...burrito.ingredients, 'salsa']
}

// copy.type = 'flour tortilla';
// copy.ingredients.push('salsa');


console.log("copy", copy);
console.log("burrito", burrito);
