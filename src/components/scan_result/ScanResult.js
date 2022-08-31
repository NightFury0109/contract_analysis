import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import './style.scss';

import ContractStatus from './ContractStatus';
import TrustScore from './TrustScore';
import ContractBalance from './ContractBalance';
import Transactions from './Transactions';
import Vulnerabilities from './Vulnerabilities';

import { } from '../../action/contract';

const Analysis = () => {
  const { verified } = useSelector(state => state.contract);
  const dispatch = useDispatch();

  const param = useParams();

  useEffect(() => {
    let reqData = { "address": [param.address] };
  }, []);

  return (
    <>
      <p className='text-6xl font-bold text-center leading-96 mt-6'>Analysis Results</p>
      <p className='text-2xl font-medium leading-9 text-center mt-2'>You've scanned your first smart contract!</p>

      <div className='flex justify-center w-full'>
        <div className="mt-5 grid grid-cols-6 gap-6 w-full md:w-2/3">
          <div className="col-span-6">
            <ContractStatus address={param.address} />
          </div>

          <div className="col-span-6 lg:col-span-2">
            <TrustScore />
          </div>
          <div className="col-span-6 lg:col-span-2">
            <ContractBalance />
          </div>
          <div className="col-span-6 lg:col-span-2">
            <Transactions />
          </div>

          <div className="col-span-6 lg:col-span-3">
            <Vulnerabilities />
          </div>
        </div>
      </div>
    </>
  )
}

export default Analysis;