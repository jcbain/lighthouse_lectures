import React from 'react';
const Computer = (props) => {
  //  03 section with add ability to add state
  //  03 Game component needs to pass down the setter
  const {state, setState} = props;

  

  
  return (
    <section className="computer">
      {/* 00 this is where the robot head is */}
      {/* 00 but it doesn't really have anything we can hold on to */}
      {/* 00 so we need to decide if we can grab it by something  */}
      {/* 00 but we are going to give it a test-id because test-ids are only used for testing */}
      <span
        role="img" 
        aria-label="robot" 
        // 01 so we will add this
        // 01 if we do data-* it will allow us to attach
        // 01 key value pairs and only javascript will use it
        data-testid="robot"
        // 02 at step of adding class now
        // 02 if cheating is true then add the class
        className={state.cheating ? 'cheating' : null}
        // 04 now we just need a click handler 
        // 04 and we can run our tests and check the browser
        onClick={() => setState({...state, cheating: !state.cheating})}
        // 05 and now we just have one more test to tackle
        // 05 mocking axios
      >
        🤖
      </span>
      <div>
        <h1>{state.cheating ? 'EXTERRMINATE !' : 'Good game to you'}</h1>
        <div className="choices">
          <button>
            <span role="img" aria-label="moai">
              {state.compSelection === 'Moai' ? '🗿' : ' ? '}
            </span>
          </button>
          <button>
            <span role="img" aria-label="axe">
              {state.compSelection === 'Axe' ? '🪓' : ' ? '}
            </span>
          </button>
          <button>
            <span role="img" aria-label="tree">
              {state.compSelection === 'Tree' ? '🌳' : ' ? '}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Computer;