import React from 'react';

const Computer = (props) => {
 
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
        // className={state.cheating ? 'cheating' : null}
        // onClick={() => setState({...state, cheating: !state.cheating})}
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