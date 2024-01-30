import React from 'react';

import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ answer, guesses }) {
  let gs = [...guesses];
  for (let i = gs.length; i < NUM_OF_GUESSES_ALLOWED; ++i) {
    gs.push('     ');
  }

  if (gs.length > NUM_OF_GUESSES_ALLOWED) {
    gs = gs.slice(0, NUM_OF_GUESSES_ALLOWED);
  }

  return (
    <div className="guess-results">
      {gs.map((g, i) => <Guess answer={answer} guess={g} key={`guess_${i}`} />)}
    </div>
  );
}

export default GuessResults;
