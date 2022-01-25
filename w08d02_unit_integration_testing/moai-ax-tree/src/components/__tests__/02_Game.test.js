import React from 'react';
import Game from '../Game';
// 03 bring in fireEvent which brings in all 
// 03 all dom events
import { render, fireEvent } from '@testing-library/react';

describe('tests for the Game component', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    // first we need to render the Game component

    // const whatIsThis = render(<Game />);
    // console.log(whatIsThis)

    // 00 so we nee to grab off getByTestId
    const { getByTestId } = render(<Game />);

    // then we need to find the robot head (somehow)
    // 01 then specify the id here 
    const robotHead = getByTestId('robot');
    // 01 at this point it will pass but if we give it a test-id that doesn't exist
    // 01 it will fail
    // const robotHead = getByTestId('rob');

    // then click (virtual) on the robot head

    // 02 now we need to click the robotHead
    // 02 so we need the fireEvent from @testing library

    // 04 now we want to virtually fire a click on the
    // 04 robotHead
    fireEvent.click(robotHead);

    // then determine if cheating is now true

    // 05 so how will we know if cheating === true
    // 05 if that it part of state?
    // 05 usually something happens on the UI (inferring that cheating is true)
    // 05 how about it we check if the robot head has a class
    // 05 well now we will need Jest-DOM
    // 05 because we need some custom Dom matcher functionality
    // 05 checkout testing-library-docs > ecosystem > Jest dom > github 
    // 05 and this is all brought in from the setupTests.js file

    // click on it again

    // then determine that cheating is now false


  })
});