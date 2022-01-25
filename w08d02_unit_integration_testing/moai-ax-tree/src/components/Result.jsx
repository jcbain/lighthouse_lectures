import React, { useState } from 'react';
import axios from 'axios';
import {genFeedbackMessage} from '../helpers/helpers';

// 00 you will notice, that Result has state
// 00 but we have to click the button in order to grab the data
// 00 we make an axios call to grab it

// 01 so we are going to test Result
// 01 so we need to go back to /src/compnonents/Result.test.js

const Result = (props) => {
  const [highScores, setHighScores] = useState([]);

  const fetchHighScores = () => {
    axios
      .get('/api/scores')
      .then(response => setHighScores(response.data))
      .catch(err => console.error(err));
  };

  return(
    <footer data-testid="result_footer">
      <h2>{ genFeedbackMessage(props.status) }</h2>
      <button onClick={fetchHighScores} data-testid="high-scores">High Scores!</button>
      { highScores.map(highScore => <li key={highScore.id}>{highScore.name}: {highScore.points}</li>) }
    </footer>
  );
}

export default Result;