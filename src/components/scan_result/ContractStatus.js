import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './style.scss';

const ContractStatus = ({ address }) => {
  return (
    <>
      <div className="contract-status shadow-xl">
        <p className="text-center p-5 light-bg success-cl text-2xl font-bold leading-7">Verified NFT Contract</p>
        {/* <p className='text-center p-5 text-2xl font-semibold leading-7'>{address}</p> */}
        <CopyToClipboard text={address}>
          <p className='text-center p-5 text-2xl font-semibold leading-7 cursor-pointer hover:opacity-80'>{address.substr(0, 7)} . . . {address.slice(-4)}</p>
        </CopyToClipboard>
      </div>
    </>
  )
}

export default ContractStatus;