import React from 'react';
import Web3 from 'web3';

import SearchForm from './SearchForm';
import BgTextCard from './BgTextCard';

import './style.scss';

const Landing = () => {
  const web3 = new Web3("https://mainnet.infura.io/v3/8d8c24c43df74caeab400362f82b4805");

  const searchContract = async (address) => {
    console.log(address);

    // let flag = false;
    // web3.eth.getBalance(address, function (error, balance) {
    //   if (error) {
    //     console.log(error);
    //     flag = True;
    //   } else {
    //     balance = web3.utils.fromWei(balance, "ether");
    //     console.log(balance);
    //     setContractBalance(balance + " eth");
    //   }
    // }).then(
    //   balance => console.log("106")
    // );
    // if (flag) {
    //   return
    // }
  }

  return (
    <>
      <p className='text-6xl font-bold text-center mt-32 title-font'>Crypto Scam Detector</p>
      <p className='text-center text-2xl font-medium leading-9 mt-10'>Scan smart contracts and wallet addresses for malicious activity</p>

      <div className="mt-24">
        <SearchForm searchContract={searchContract} />
      </div>

      <div className="mt-28 flex flex-col items-center cursor-pointer">
        <p className='font-bold mb-2'>Learn more</p>
        <img src="assets/images/icons/arrow_bottom.png" alt="arrow_bottom" height='31px' />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mt-36">
        <p className='text-4xl leading-10 font-bold'>ZERO RISKS ON EXPLORING BLOCKCHAIN</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 mt-4">
        <p className='font-normal opacity-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>

        <BgTextCard />
      </div>

      <div className="flex justify-center mt-32">
        <button className='border-2 rounded px-20 py-7 font-bold transition-all duration-300 hover:bg-white hover:text-primary-500'>GET IN TOUCH</button>
      </div>
    </>
  )
}

export default Landing;