import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guess from '../Guess';
import GuessForm from '../GuessForm';
import GuessResults from '../GuessResults';
import Banner from '../Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessRows, setGuessRows] = React.useState(renderGuessRows(guesses));
  const [banner, setBanner] = React.useState(renderBanner(''));
  const [inputDisabled, setInputDisabled] = React.useState(false);

  function renderBanner(bannerState, numguesses) {
    if (bannerState) return <Banner bannerstate={bannerState} numguesses={numguesses} answer={answer} />
  }

  function renderGuessRows(guesses) {
    return range(NUM_OF_GUESSES_ALLOWED).map((num) => {
      return <Guess key={num} guess={!!guesses[num] ? guesses[num] : ''} answer={answer} />
    })
  }

  function handleGuesses(guess) {
    const nextGuesses = [
      ...guesses,
      guess
    ];
    setGuesses(nextGuesses);
    setGuessRows(renderGuessRows(nextGuesses));

    if (guess === answer) {
      setBanner(renderBanner('happy', nextGuesses.length));
      setInputDisabled(true);
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setBanner(renderBanner('sad'));
      setInputDisabled(true);
    }
  }
  return (
    <>
      <GuessResults guessRows={guessRows} />
      <GuessForm handleGuesses={handleGuesses} inputDisabled={inputDisabled} />
      {banner}
    </>
  );
}

export default Game;
