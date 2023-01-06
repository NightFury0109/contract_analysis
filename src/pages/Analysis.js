import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// import './style.scss';

import Contract from '../components/analysis/Contract';
import TrustPercentage from '../components/analysis/TrustPercentage';
import Balance from '../components/analysis/Balance';
import FirstTransaction from '../components/analysis/FirstTransaction';
import LastTransaction from '../components/analysis/LastTransaction';
import TransactionInitiated from '../components/analysis/TransactionInitiated';
import TotalValue from '../components/analysis/TotalValue';

import { getContractDate, getContractBal } from '../action/contract';

const Analysis = () => {
  const { verified } = useSelector(state => state.contract);
  const dispatch = useDispatch();

  const param = useParams();

  useEffect(() => {
    let reqData = { "address": [param.address] };

    dispatch(getContractDate(reqData));
    dispatch(getContractBal(reqData));
  }, []);

  return (
    <>
      <p className='text-6xl font-bold text-center leading-96 mt-6'>Analysis Results</p>
      <p className='text-2xl font-medium leading-9 text-center mt-2'>You've scanned your first smart contract!</p>

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