import React from 'react';
import { useParams } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import ReactTooltip from 'react-tooltip';

import './style.scss';

const Contract = () => {
  let params = useParams();

  return (
    <>
      <div className="contract-card grid grid-cols-6 gap-3 shadow-xl">
        <div className="col-span-1 flex justify-center items-center">
          <img src="../../assets/images/icons/check.png" alt="check" className='w-12 h-12' />
        </div>


        <div className="col-span-4 flex flex-col items-center">
          <CopyToClipboard text={params.address}>
            <p className='contract-addr text-2xl font-semibold leading-7 cursor-pointer mb-5 hover:opacity-80'>{params.address.substr(0, 7)} . . . {params.address.slice(-4)}</p>
          </CopyToClipboard>

          <img src="../../assets/images/white_line.png" alt="white_line" width="100%" />

          <p className='success-cl text-center text-2xl font-semibold leading-7 mt-5'>Verified NFT Contract</p>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <img src="../../assets/images/icons/check.png" alt="check" className='w-12 h-12' />
        </div>
      </div>
    </>
  )
}

export default Contract;