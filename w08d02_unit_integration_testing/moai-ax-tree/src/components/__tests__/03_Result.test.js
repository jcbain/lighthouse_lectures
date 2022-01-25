// 00 so everything we are doing is headless, 
// 00 which means we don't have a browser to run this code
// 00 so to dump the dom we need to rely on a couple on some
// 00 functions

// 01 well we have prettyDom and debug
// 01 prettyDom comes in from the global import of testing library
import { render, getByTestId, fireEvent, prettyDOM } from '@testing-library/react';
import Result from '../Result';

// import library we are going to fake
import axios from 'axios';

// then we need to tell jest to fake it
jest.mock('axios');

//  and create some fake data
const data = [
  { id: 1, name: "Dana Scully", points: 5},
  { id: 2, name: "Fox Mulder", points: 3},
  { id: 3, name: "Elanor", points: 2}
]

test('can display results from an API call', () => {
  // then we need to tell jest to respond to any axios request with our fake data 
  axios.get.mockResolvedValue({ data: data });

  // then we will render the <Result /> component
  // 02 well prettyDOM requires us to give us the element we are wanting to inspect
  // 02 so we have to bring in the container
  // 03 but we can also bring in the bound debug
  // 03 and this will just dump the dom from the element it is rendered from
  const { getByTestId, getByText, findByText, container, debug } = render(<Result status="waiting"/>)
  // console.log(prettyDOM(container)) // we have to call console.log
  debug();

  // 04 and the last thing that we need to talk about
  // 04 are coverage reports and this will tell us how many lines of code are covered in our actual app
  // 04 see coverage report in outline

  // find the high score button
  const highScoresButton = getByTestId('high-scores');

  // click high score button
  fireEvent.click(highScoresButton);

  // look for our fake data in the DOM
  return findByText("Dana Scully", { exact: false })

});



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

