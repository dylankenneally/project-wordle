import React, { useState } from "react";

function GuessInput() {
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
      />
    </form>
  );
}

export default GuessInput;
