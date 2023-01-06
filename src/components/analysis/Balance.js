import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import isEmpty from '../../utils/is-empty';

const Balance = () => {
  const { countData } = useSelector(s => s.contract);

  return (
    <>
      <div className="balance-card shadow-xl">
        <p className='text-center text-2xl font-bold leading-7'>BALANCE</p>
        <p className='text-center info-cl text-2xl font-bold leading-7 mt-5'>
          {isEmpty(countData) ? '' : countData[0].balance + ' ETH'}
        </p>
      </div>
    </>
  )
}

export default Balance;