import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';

import './style.scss';

const SearchForm = ({ searchContract }) => {
  const [address, setAddress] = useState("");

  const onSearch = async (e) => {
    e.preventDefault();

    await searchContract(address);
  }

  return (
    <>
      <div className="flex justify-center">
        {/* <div className="flex items-center w-full sm:w-2/3"> */}
        <form onSubmit={onSearch} className="flex items-center w-full sm:w-2/3">
          <input type="text" placeholder='Enter a contract or wallet address' className='w-full search-form' value={address} onChange={e => setAddress(e.target.value)} />

          <button type='submit' className='search-btn transition-all duration-300 ml-6 flex items-center justify-center'>
            <ImSearch className=' text-4xl' />
          </button>
        </form>
        {/* </div> */}
      </div>
    </>
  )
}

export default SearchForm;