import React from "react";

function Banner({ bannerstate, numguesses, answer }) {
  console.log({ bannerstate })
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
        <strong> {numguesses} guesses</strong>.
      </p>
    </div>
  );
}

export default Banner;
