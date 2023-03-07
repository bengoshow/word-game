import React from "react";

function GuessForm() {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });
    setGuess('')
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="\w{5}"
        minLength="5"
        maxLength="5"
        title="5 letter word"
        required
        onChange={event => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }} />
    </form>
  );
}

export default GuessForm;
