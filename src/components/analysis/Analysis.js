import React from 'react';

import './style.scss';

import Contract from './Contract';

const Analysis = () => {
  return (
    <>
      <p className='text-6xl font-bold text-center leading-96 mt-6'>Analysis Results</p>
      <p className='text-2xl font-medium leading-9 text-center mt-4'>You've scanned your first smart contract!</p>

      <div className="mt-5">
        <Contract />
      </div>
    </>
  )
}

export default Analysis;