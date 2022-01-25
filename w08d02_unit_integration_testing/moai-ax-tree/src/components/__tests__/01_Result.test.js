import React from 'react';

import { render, getByTestId } from '@testing-library/react';
import Result from '../Result';
// 00 the first thing we need to do is import
// 00 the libary we are going to fake

// import library we are going to fake

// then we need to tell jest to fake it

//  and create some fake data

// then we need to tell jest to respond to any axios request with our fake data 

// then we will render the <Result /> component

// find the high score button

// click high score button

// look for our fake data in the DOM



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

