
// 00 so we are wanting to render the Game because it 
// 00 contains the Computer as a child but I don't have 
// 00 to set up all of the data taht Computer needs as props

// 01 lets import 
import React from 'react';
import Game from '../Game';
import { render } from '@testing-library/react';

// 02 let's set up our test and define
// 02 our steps to do this
describe('tests for the Game component', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    // first we need to render the Game component

    // then we need to find the robot head (somehow)

    // then click (virtual) on the robot head

    // then determine if cheating is now true

    // click on it again

    // then determine that cheating is now false


  })
});