import { announceResult } from '../helpers'
// 00 let's use TDD to create our tests
// 00 for our robot player choosing a particular item


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

// 01 but before we do that we are going to run the test suite
// 01 just to make sure all of our current tests are running alright
// 01 npm test
// 01 press "a" to run all tests

// 02 but I want the verbose message
// 02 npm test -- --verbose
// 02 the first -- tells npm that it is for jest and not npm

// 02 i am writing this as a tester
// 02 so we get to name the function 
// 02 where the function will be saved
// 02 what the arguments are...

