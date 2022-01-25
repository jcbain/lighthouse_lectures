import React from 'react';
import Game from '../Game';
import { render } from '@testing-library/react';

// 00 first thing we need to do is render our component


describe('tests for the Game component', () => {

  test('clicking on the robot head icon toggles the cheating state', () => {
    // first we need to render the Game component
    // 00 so lets do that here
    // 00 and the render will give us something back
    // 00 so I want to look at that
    const whatIsThis = render(<Game />);
    console.log(whatIsThis)

    // 01 so what is return is an object and that object 
    // 01 has a key `container` that is an html div element because Game is a div
    // 01 this represents this component in the dom

    // 02 but we get all of these function
    // 02 queryBy..., getBy..., findBy...
    // 02 by why three versions
    // 02 query... and get... are synchronous (`query` if it can't find returns null, however `get` throws an error)
    // 02 so we tend to favor `get`
    // 03 `find...` is asynchronous

    // 04 so this gives us back something that we can pull off
    // 04 so if I want to find the robot head, I want to either 
    // 04 use getBy.. or queryBy.. (we will use getBy)
    // 04 but we need to decide what to use
    // 04 and we will need to look at our <Computer /> component
    // 04 and the img to see if we can grab onto anything


    // then we need to find the robot head (somehow)

    // then click (virtual) on the robot head

    // then determine if cheating is now true

    // click on it again

    // then determine that cheating is now false


  })
});