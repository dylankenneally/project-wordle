import React from 'react';

function Guess({ guess = '     ' }) {
  if (guess.length < 5) {
    guess = guess.padEnd(5, ' ');
  } else if (guess.length > 5) {
    guess = guess.substr(0, 5);
  }

  return (
    <p className="guess">
      {guess.split('').map((letter, index) => (
        <span className="cell" key={`guess${index}`}>{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
