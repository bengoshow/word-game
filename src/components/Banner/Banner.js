import React from "react";

function Banner({ bannerstate, numguesses, answer }) {
  if (bannerstate !== 'happy') {
    return (
      <div className={`${bannerstate} banner`}>
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  }

  return (
    <div className={`${bannerstate} banner`}>
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong> {numguesses === 1 ? '1 guess' : `${numguesses} guesses`}</strong>.
      </p>
    </div>
  );
}

export default Banner;
