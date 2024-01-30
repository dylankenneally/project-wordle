import React from 'react';

import { checkGuess } from '../../game-helpers';

function Guess({ answer, guess = '     ' }) {
  if (guess.length < 5) {
    guess = guess.padEnd(5, ' ');
  } else if (guess.length > 5) {
    guess = guess.substr(0, 5);
  }

  let res = checkGuess(guess, answer);
  return (
    <p className="guess">
      {guess.split('').map((letter, index) => (
        <span className={`cell ${guess !== '     ' ? res[index].status : ''}`} key={`guess${index}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
