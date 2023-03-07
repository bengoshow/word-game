import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function handleGuesses(guess) {
    setGuesses([
      ...guesses,
      {
        id: Math.random(),
        guess: guess
      }
    ]);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm handleGuesses={handleGuesses} />
    </>);
}

export default Game;
