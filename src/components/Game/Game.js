import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessRows, setGuessRows] = React.useState(renderGuessRows(guesses));

  function renderGuessRows(guesses) {
    return range(NUM_OF_GUESSES_ALLOWED).map((num) => {
      return <Guess key={num} guess={!!guesses[num] ? guesses[num] : ''} />
    })
  }

  function handleGuesses(guess) {
    const nextGuesses = [
      ...guesses,
      guess
    ];
    setGuesses(nextGuesses);
    setGuessRows(renderGuessRows(nextGuesses));
  }
  return (
    <>
      <GuessResults guessRows={guessRows} />
      <GuessForm handleGuesses={handleGuesses} />
    </>);
}

export default Game;
