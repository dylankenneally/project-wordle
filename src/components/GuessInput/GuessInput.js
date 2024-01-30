import React, { useState } from "react";

function GuessInput({ onNewGuess }) {
  const [guess, setGuess] = useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length !== 5) {
          return;
        }

        console.log({ guess });
        onNewGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
