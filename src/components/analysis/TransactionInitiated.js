import React from 'react';

import './style.scss';

const TransactionInitiated = () => {
  return (
    <>
      <div className="balance-card shadow-xl">
        <p className='text-center text-2xl font-bold leading-7'>TRANSACTION INITIATED</p>
        <p className='text-center info-cl text-2xl font-bold leading-7 mt-5'>250</p>
      </div>
    </>
  )
}

export default TransactionInitiated;