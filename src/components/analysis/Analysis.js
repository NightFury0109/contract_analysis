import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './style.scss';

import Contract from './Contract';
import TrustPercentage from './TrustPercentage';
import Balance from './Balance';
import FirstTransaction from './FirstTransaction';
import LastTransaction from './LastTransaction';
import TransactionInitiated from './TransactionInitiated';
import TotalValue from './TotalValue';

import { getContractData } from '../../action/contract';

const Analysis = () => {
  const { verified } = useSelector(state => state.contract);

  // const param = useParams();

  // useEffect(() => {
  //   let reqData = { address: param.address };

  //   getContractData(reqData);
  // }, []);

  return (
    <>
      <p className='text-6xl font-bold text-center leading-96 mt-6'>Analysis Results</p>
      <p className='text-2xl font-medium leading-9 text-center mt-4'>You've scanned your first smart contract!</p>

      <div className="mt-5 flex flex-col items-center">
        <Contract verified={verified} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <TrustPercentage />
          <Balance />
          <FirstTransaction />
          <LastTransaction />
          <TransactionInitiated />
          <TotalValue />
        </div>
      </div>
    </>
  )
}

export default Analysis;