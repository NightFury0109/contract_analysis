import React from 'react';

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <img src="assets/images/logo.png" alt="logo" width='45px' height='45px' />
          <span className='ml-2 text-3xl font-semibold title-font'>SHIELD</span>
        </div>

        <div className="flex items-center cursor-pointer">
          <span className='text-xl font-bold mr-9 primary-font hidden sm:block'>Get in Touch</span>
          <img src="assets/images/icons/arrow_right.png" alt="arrow_right" height='20px' />
        </div>
      </div>
    </>
  )
}

export default Header;