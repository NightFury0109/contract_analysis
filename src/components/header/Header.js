import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <Link to="/" className="flex items-center cursor-pointer">
          <img src="../../assets/images/logo.png" alt="logo" width='45px' height='45px' />
          <span className='ml-2 text-3xl font-semibold title-font'>SHIELD</span>
        </Link>

        <a href="https://www.getshield.xyz/" target="_blank" rel="noreferrer">
          <div className="flex items-center cursor-pointer hover:opacity-80 transition-all duration-300">
            <span className='text-xl font-bold mr-9 primary-font hidden sm:block'>Get in Touch</span>
            <img src="../../assets/images/icons/arrow_right.png" alt="arrow_right" height='20px' />
          </div>
        </a>
      </div>
    </>
  )
}

export default Header;