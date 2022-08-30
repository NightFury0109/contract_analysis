import React from 'react';

import './style.scss';

import Contract from './Contract';
import TrustPercentage from './TrustPercentage';
import Balance from './Balance';
import FirstTransaction from './FirstTransaction';

const Analysis = () => {
  return (
    <>
      <p className='text-6xl font-bold text-center leading-96 mt-6'>Analysis Results</p>
      <p className='text-2xl font-medium leading-9 text-center mt-4'>You've scanned your first smart contract!</p>

      <div className="mt-5 flex flex-col items-center">
        <Contract />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-7">
          <TrustPercentage />
          <Balance />
          <FirstTransaction />
        </div>
      </div>
    </>
  )
}

export default Analysis;