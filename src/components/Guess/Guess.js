import React from "react";
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const checkResults = checkGuess(guess, answer);
  const emptyRow = range(5).map((index) => (<span key={index} className="cell"></span>));
  const guessRow = guess !== '' ? range(5).map((index) => (<span key={index} className={`cell ${checkResults[index].status}`}>{guess[index]}</span>)) : emptyRow;
  return <p className="guess">{guessRow}</p>;
}

export default Guess;
