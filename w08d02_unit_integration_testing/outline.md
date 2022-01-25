# Unit and Integration Testing

## Types of Testing
- unit testing: testing the smallest parts of our code (functions)
- integration testing: testing how the pieces work together
- end-to-end: testing the features of our app as a user would (think about their user stories)
- static testing: checking if code is syntactically complete (linters)
- regression testing: set-up tests for a found bug, fix it, and keep tests in to make sure our app doesn't regress

## Tools for unit and integration test (React)
- `Jest` - this is our test runner (like mocha)
  > not specific to react however
  > if you look at it, you will notice it isn't a dependency in our `package.json`
    - it is a dependency of `react-scripts` however, much like (`webpack`)
  > why `Jest`? Same creators as `React`
- Jest documentation (https://jestjs.io/)
  > see docs and look at example
  > if our test runs without error then our test passes
    > most popular way to get an error: violate an assertion
    > Chai was an assertion library
    > `Jest` ships with an assertion library (check out API > Expect)
      - here we can see `expect(someVal)` and we can chain on it `.toBe...`

## What are we testing today?
- Moai - Axe - Tree (a Francis application for rock paper scissors)
- Describe the game ( moai beats ax, tree beats moai, ax beats tree)
- And we are playing against the computer (robot)
- Game is only partially working (if we choose, we can see we can win lose or tie)
  > However, the computer is hard coded to always pick moai
- Can also click the person and reset the game

## Go through components
- Use Components Dev tools and click through
- `<Game >` component has the app state in it
  - computer selection, player selection, status, cheating
  - if cheating is true, then the computer is going to cheat

## Tests for Today
1. Determine a response for the computer to throw (TDD)
2. Clicking on the robot head will toggle the cheating state (TDD)
3. Mock axios and test async operations

## Taking a look at some Tests that are already written
- `src/__tests__/App.test.js`: just checks to see if we can render the component, and unmount it
  > does our app start
- we are just going building a new helper so we will start with the tests for that helper first
- let's look at `helpers/helpers.js` 
- now let's look up `helpers/__tests__/helpers.test.js` just to get used to the format.

## AFTER UNIT TEST and onto integration test
- Now we want to test toggling of the cheating state when the robot head is clicked on
- But JEST is not enough because it doesn't know how to render react components
- We will need `testing library` because there are things that we need to test that are unique to the browser
- But we want a particular flavor `Docs` > `Frameworks` > `React Testing Library`
- fortunately for us, this is already brought in
- let's look at what our coworkers have been doing `components/__tests__/Result.test.js`

## Coverage report
- coverage reports will tell us how many lines are covered in our tests
- `npm run test -- --coverage`
  > staments are code statments (kind of like lines of code)
  > branches are conditionals and we want to check both sides of the conditional
  > what lines are not covered in what files
- but file watch prevents the rest of the files from showing
- `npm test -- --coverage --watchAll=false`
- and we also get a `coverage/` directory
- we can now go to `coverage/lco-report/index.html`
