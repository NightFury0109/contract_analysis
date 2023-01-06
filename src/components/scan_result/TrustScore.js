import React from 'react';

import './style.scss';

const TrustScore = () => {
  return (
    <>
      <div className="trust-score-card shadow-xl">
        <p className='text-center text-2xl font-bold leading-7'>TRUST SCORE</p>
        <p className='text-center text-2xl font-bold leading-7 mt-5 success-cl'>87%</p>
      </div>
    </>
  )
}

export default TrustScore;