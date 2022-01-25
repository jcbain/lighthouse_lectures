
// 00 so we are pulling in a couple of things
// 00 the first is we need some things from @testing-library/react
// 00 and mainly, we need the render function
// 00 we also need to pull in the component we are testing
import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Result from '../Result';

// 01 then we set up our test
test('shows appropriate message when the status is "Waiting"', () => {

  // 01 setup some fake state
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  // 02 then we call our component insde of the render
  // 02 function and pass to it it's prop
  // 02 this will render the Result component and its children
  const { container } = render(<Result status={fakeState.status} />);
  
  // 03 and now we can use this getByTestId -> look inside the container for a 
  // 03 test-id of result_footer and see if it has text conent of "Waiting for your choice!"
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

// 04 now we can build this out ourself but we need to think about what
// 04 component we need to test out. 
// 04 we are clicking the robot head, but the state lives in Game and get's
// 04 passed to the Computer component
// 04 so let's render Game so we don't have to setup all of that state and
// 04 pass it in but instead just rely on state being created when Game is invoked
// 04 create/components/__tests__/Game.test.js