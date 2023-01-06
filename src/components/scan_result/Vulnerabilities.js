import React from 'react';

import './style.scss';

const Vulnerabilities = () => {
  return (
    <>
      <div className="vulnerabilities-card shadow-xl">
        <p className='text-center text-2xl font-bold leading-7'>VULNERABILITIES</p>
        <p className='text-center text-2xl font-bold leading-7 mt-5 info-cl'>NONE DETECTED</p>

        <div className="flex justify-center">
          <button type='button' className='mt-5 border-2 rounded py-2 px-4 cursor-pointer hover:bg-white hover:text-primary-400 font-normal transition-all duration-300'>Learn about vulnerabilities</button>
        </div>
      </div>
    </>
  )
}

export default Vulnerabilities;