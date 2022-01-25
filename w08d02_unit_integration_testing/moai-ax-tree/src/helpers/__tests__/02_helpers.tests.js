import { announceResult, robotResponse } from '../helpers'
// 00 now let's start building the tests 
// 00 for the function that will choose an option
// 00 for the robot


describe('announceResult function', () => {

  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
});


// 01 so let's define some tests, one for cheating
// 01 and one for not cheating
describe('tests for choosing an option for the robot', () => {

  test('when cheating is true, returns the winning options', () => {
    // 02 so we are going to need two pieces of data,
    // 02 whether or not the robot is cheating (true)
    // 02 and the selection of the player
    // const actual = robotResponse(true, 'Axe');
    
    // 03 but this is hard to read, we don't know what these values mean
    const isCheating = true;
    const playerSelection = 'Axe';
    const actual = robotResponse(isCheating, playerSelection);

    // 04 now we want to specify what we expect the return from this
    // 04 function to be. If player selected 'Axe' then the robot should select 'Moai'
    const expected = 'Moai';

    // 05 and finally our expectation and look at jest documentation
    // 05 to see our options
    expect(actual).toBe(expected);
  });

  // 06 now we can go ahead and build out our next test 
  // 06 by borrowing a lot from the code above.

  test('when cheating is false, returns a valid option', () => {
    // 07 but now isCheating is false
    // 07 and it doesn't really matter what
    // 07 the player picks
    const isCheating = false;
    const playerSelection = 'Axe';
    const actual = robotResponse(isCheating, playerSelection);

    // 07 but the expected will be one of either `Moai`, `Axe` or `Tree`
    const options = ['Moai', 'Axe', 'Tree'];

    // 08 but now we want to look up our expectation
    // 08 let's checkout toContain
    expect(options).toContain(actual);

  });
  // 09 and now we want to see these new tests failing
}) 

// 10 now we need to build the function /helpers/helpers.js



