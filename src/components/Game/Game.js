import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

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

    const checkResults = checkGuess(guess, answer);
    let wrongLetter;
    checkResults.map(result => (wrongLetter = result.status !== "correct"));
    console.log({ wrongLetter });
    const bannerState = wrongLetter ? 'sad' : 'happy';
    console.log({ bannerState });
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED || !wrongLetter) {
      setBanner(renderBanner(bannerState, nextGuesses.length));
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
