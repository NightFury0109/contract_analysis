import React from 'react';
import { ImSearch } from 'react-icons/im';

import './style.scss';

const SearchForm = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center w-full sm:w-2/3">
          <input type="text" placeholder='Enter a contract or wallet address' className='w-full search-form' />

          <button className='search-btn transition-all duration-300 ml-6 flex items-center justify-center'>
            <ImSearch className=' text-4xl' />
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchForm;