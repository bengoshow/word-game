import React from "react";
import { range } from '../../utils';

function Guess({ guess }) {
  const emptyRow = range(5).map((index) => (<span key={index} className="cell"></span>));
  const guessRow = guess !== '' ? range(5).map((index) => (<span key={index} className="cell">{guess[index]}</span>)) : emptyRow;
  return <p className="guess">{guessRow}</p>;
}

export default Guess;
