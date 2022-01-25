import React from 'react';
import { render, getByTestId, fireEvent, act } from '@testing-library/react';
import Result from '../Result';

// import library we are going to fake
import axios from 'axios';

// then we need to tell jest to fake it
// 00 notice the string here
// 00 we are just telling it to mock axios
jest.mock('axios');

//  and create some fake data
// 01 our fake data should look the same as our 
// 01 real data
const data = [
  { id: 1, name: "Dana Scully", points: 5},
  { id: 2, name: "Fox Mulder", points: 3},
  { id: 3, name: "Elanor", points: 2}
]

test('can display results from an API call', () => {
  // then we need to tell jest to respond to any axios request with our fake data 
  // 02 well, now we need to say any axios.get request that is ever called in our 
  // 02 code, we are going to mock the return value .mockReturnValue()
  // 02 but, we are working with a promise so we need to use .mockResolvedValue()
  // 02 but what is the returned value of axios
  // 02 an object with a key of data
  axios.get.mockResolvedValue({ data: data });

  // then we will render the <Result /> component

  // 03 and now we need to render our <Result /> Component
  // 03 and synchronously is fine because the button should always be in the dom
  const { getByTestId, getByText, findByText } = render(<Result status="waiting"/>)

  // find the high score button
  // 04 find the button now
  const highScoresButton = getByTestId('high-scores');

  // click high score button
  // 05 and now we fire off our event

  fireEvent.click(highScoresButton);

  // look for our fake data in the DOM
  // 06 and we will look for "Dana Scully"
  // 06 but should be be using getByText?
  // 06 getByText("Dana Scully")

  // 07 but that isn't enough
  // 07 because all we didn't do is throw an error
  // 07 but our main function is synchronous
  // 07 but findByText is asyn and returns a promise
  // findByText("Dana Scully");

  // 08 but all we have to do is return the promise
  // 08 to make jest wait for it
  // return findByText("Dana Scully")

  // 09 but still errors because it is looking for
  // 09 an exact match
  // 09 so we just need to change this a bit
  return findByText("Dana Scully", { exact: false })

});

// 10 okay, just a couple more things






test('shows appropriate message when the status is "Waiting"', () => {

  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  const { container } = render(<Result status={fakeState.status} />);
  
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

