import React from 'react';

function Banner({ answer, win, guesses = 0 }) {
  let content;
  if (win) {
    content = (
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses} guesses</strong>.
      </p>
    );
  } else {
    content = <p><strong>Sorry,</strong> the correct answer is <strong>{answer}</strong>.</p>;
  }

  return (
      <div className={`${win ? 'happy' : 'sad'} banner`}>
        {content}
    </div>
  );
}

export default Banner;
