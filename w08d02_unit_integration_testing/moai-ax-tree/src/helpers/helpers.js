export const announceResult = (playerSelection, compSelection) => {
  const lookup = {
    'Axe': 'Tree',
    'Tree': 'Moai',
    'Moai': 'Axe'
  };
  if (!(playerSelection && compSelection)) {
    return 'Waiting';
  }
  if (lookup[playerSelection] === compSelection) {
    return 'Won';
  }
  if (lookup[compSelection] === playerSelection) {
    return 'Lost';
  }
  return 'Tied';
};

export const genFeedbackMessage = (status) => {
  const lookup = {
    Waiting: 'Waiting for your choice!',
    Won: 'You win!!',
    Lost: 'Too bad! Better luck next time.',
    Tied: 'Tie game'
  };
  return lookup[status];
};


// 00 now we can build out our function
// 00 we know we are taking in two arguments
// 00 cheating, playerSelection
export const robotResponse = (isCheating, playerSelection) => {
  if (isCheating) {
    // 01 and we can construct an object
    // 01 where the value is what beats the key
    const winningOptions = {
      Tree: 'Axe',
      Axe: 'Moai',
      Moai: 'Tree'
    };
    // 02 and pass in the playerSelection for the robot response
    return winningOptions[playerSelection];
  }
  // 03 what if cheating is false
  // 03 now we just need to return somethings
  const options = ['Moai', 'Axe', 'Tree'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];

  // 04 and now we have to update our app
  // 04 inside of `src/components/Player.js`

};