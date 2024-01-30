import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  let won = guesses.includes(answer);
  let gameOver = guesses.length === NUM_OF_GUESSES_ALLOWED || won;
  return (
    <>
      {gameOver && (
        <Banner answer={answer} win={won} guesses={guesses.length} />
      )}
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        onNewGuess={(guess) => {
          setGuesses([...guesses, guess]);
        }}
        disabled={gameOver}
      />
    </>
  );
}

export default Game;
