import React from 'react';
import Game from '../Game';
import { render, fireEvent } from '@testing-library/react';

// 00 so now we can use Jest-dom to see if our robot head has a class

describe('tests for the Game component', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    // first we need to render the Game component
    const { getByTestId } = render(<Game />);

    // then we need to find the robot head (somehow)
    const robotHead = getByTestId('robot');

    // then click (virtual) on the robot head
    fireEvent.click(robotHead);

    // then determine if cheating is now true
    
    // 01 like so to see if it has
    // 01 this class of cheating
    expect(robotHead).toHaveClass('cheating');

    // click on it again

    // 02 then we click on the robot head again
    fireEvent.click(robotHead);

    // then determine that cheating is now false

    // 03 and now we expect it to NOT have the class 
    // 03 of 'cheating' so we can just chain in a `.not`
    expect(robotHead).not.toHaveClass('cheating');

    // 04 and that is the test
    // 04 and we run our test suite and 
    // 04 see that it fails
    
    // 05 so now we need to fix it by going into Computer


  })
});