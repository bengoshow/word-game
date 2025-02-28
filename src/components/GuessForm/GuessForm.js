import React from "react";

function GuessForm({ handleGuesses, inputDisabled }) {
  const [guess, setGuess] = React.useState('');
  const guessRef = React.useRef();
  React.useEffect(() => {
    guessRef.current.focus();
  }, [])
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
        ref={guessRef}
        disabled={inputDisabled}
        onChange={event => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }} />
    </form>
  );
}

export default GuessForm;
