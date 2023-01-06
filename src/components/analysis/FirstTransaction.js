import React from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

import isEmpty from '../../utils/is-empty';

const FirstTransaction = () => {
  const { date } = useSelector(s => s.contract);

  return (
    <>
      <div className="balance-card shadow-xl">
        <p className='text-center text-2xl font-bold leading-7'>FIRST TRANSACTION</p>
        <p className='text-center info-cl text-2xl font-bold leading-7 mt-5'>
          {isEmpty(date) ? '' : date[0].createdAt.substr(0, 10)}
        </p>
      </div>
    </>
  )
}

export default FirstTransaction;