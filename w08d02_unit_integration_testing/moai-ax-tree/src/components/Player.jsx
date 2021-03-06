import React, { useEffect } from 'react';
// 01 import our functino
import { announceResult, robotResponse } from '../helpers/helpers';



const Player = (props) => {
  const {playerSelection, compSelection, cheating} = props.state;
  const {setState} = props;
  const options = [
    ['Moai', '🗿'],
    ['Axe', '🪓'],
    ['Tree', '🌳']
  ];

  useEffect(() => {
    if(playerSelection && compSelection){
      const status = announceResult(playerSelection, compSelection);
      setState(prevState => ({ ...prevState, status }));
    }
  }, [playerSelection, compSelection]);

  // 00 this useEffect is listening of the players
  // 00 choice. If the player choses then this
  // 00 callback is run however currently the 
  // 00 computer is always selecting Moai
  // 00 let's change that
  useEffect(() => {
    if (playerSelection) {
      // const compSelection = 'Moai';

      // 03 and now we just update
      // 03 and test out our ui
      // 03 and we can update the cheating state by toggling to true in react devtools
      const compSelection = robotResponse(cheating, playerSelection);
      setState(prevState => ({ ...prevState, compSelection }));
    }
  }, [playerSelection, cheating]);

  // 04 now on to our integration test
  // 04 click on the robot head will toggle the cheating state
  // 04 but Jest can't do this by itself. It doesn't know how 
  // 04 to render react components or anything
  // 04 checkout outline integration testing section

  const resetState = () => {
    setState(prevState => ({
        ...prevState,
        playerSelection: null,
        compSelection: null,
        status: 'Waiting'
      }
    ));
  };

  const registerPlayerItem = (value, updater) => {
    updater(prevState => ({ ...prevState, playerSelection: value }));
  };

  return (
    <section className="player">
      <span
        role="img"
        aria-label="player"
        onClick={resetState}
      >👤</span>
      <div>
        <h1>Choose your destiny !</h1>
        <div className="choices">

          { options.map((option) => {
            const [choice, symbol] = option;
            return (
              <button
                onClick={() => registerPlayerItem(choice, setState)}
                type="button"
                value={choice}
                key={choice}
              >
                <span
                  role="img"
                  aria-label={choice.toLowerCase()}
                >
                  {symbol}
                </span>
              </button>
            );
          }) }

        </div>
      </div>
    </section>
  );
};

export default Player;