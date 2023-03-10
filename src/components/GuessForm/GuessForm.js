import React from "react";

function GuessForm({ handleGuesses }) {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });
    setGuess('');
    handleGuesses(guess);
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Z]{5}"
        minLength="5"
        maxLength="5"
        title="5 letter word"
        required
        autoFocus
        onChange={event => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }} />
    </form>
  );
}

export default GuessForm;
