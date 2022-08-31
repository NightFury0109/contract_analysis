import React from 'react';

import './style.scss';

const TotalValue = () => {
  return (
    <>
      <div className="balance-card shadow-xl">
        <p className='text-center text-2xl font-bold leading-7'>TOTAL VALUE RECEIVED</p>
        <p className='text-center info-cl text-2xl font-bold leading-7 mt-5'>150.00 ETH</p>
      </div>
    </>
  )
}

export default TotalValue;