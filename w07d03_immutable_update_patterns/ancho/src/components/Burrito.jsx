import { useState } from 'react';

const Burrito = () => {
  // const [ ingredients, setIngredients ] = useState(); // cannot read properties of undefined

  // const [ ingredients, setIngredients ] = useState([]); // let's start with the shape of our state
  // we need another piece of state to keep track of what the user is typing
  // because we are not adding into the array for every keystroke. Only when the press the button
  const [ newIngredient, setNewIngredient ] = useState('')

  // const [ burritoType, setBurritoType ] = useState('bowl');

  const [ burrito, setBurrito ] = useState({
    type: "bowl", 
    ingredients: []
  });

  const handleClick = () => {
    // ingredients.push(newIngredient);
    // don't push it is a mutator and it won't know to rerender

    // setIngredients((prev) => {
    //   return [...prev, newIngredient];
    // });
    setBurrito((prev) => {
      return {
        ...prev,
        ingredients: [...prev.ingredients, newIngredient] 
      }
    })

    // and we can also clear out our newIngredient
    setNewIngredient("");
  }

  const handleBurritoType = (event) => {
    setBurrito((prev) => {
      return {
        ...prev,
        type: event.target.value
      }
    })
  }

  return (
    <div>
      <h2>My burrito</h2>
      <div>
        <p>the type of burrito you want is: {burrito.type}</p>
        <input 
          // value={burritoType}
          // onChange={(event) => setBurritoType(event.target.value)}
          value={burrito.type}
          onChange={handleBurritoType}
        />
      </div>
      <div>
        <label>new ingredient:</label>
        <input 
        // this is two way bound. we can programatically change the value with value
        // and the user can change the value with onChange when they  type
          value={newIngredient}
          onChange={(event) => setNewIngredient(event.target.value)}
        />
        <button onClick={handleClick}>add topping</button>
      </div>

      {/* an array of our ingredients */}
      { burrito.ingredients.map((ingredient, i) => {
          return <p key={i}>{ingredient}</p>
      })}
    </div>
  )
};

export default Burrito;