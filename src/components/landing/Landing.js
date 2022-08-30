import React from 'react';

import SearchForm from './SearchForm';

import './style.scss';

const Landing = () => {
  return (
    <>
      <p className='text-6xl font-bold text-center mt-32 title-font'>Crypto Scam Detector</p>
      <p className='text-center text-2xl font-medium leading-9 mt-10'>Scan smart contracts and wallet addresses for malicious activity</p>

      <div className="mt-24">
        <SearchForm />
      </div>
    </>
  )
}

export default Landing;