import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import axios from "axios";
import Navigation from '../components/Header';
import Footer from '../components/Footer';
import { MailIcon } from '@heroicons/react/solid'
import { FaSchool,FaEthereum } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";

import PurpleButton from '../components/buttons/PurpleButton';


export default function Home() {

  return (
    <>
      <Head>
        <title>My Coin</title>
        
        <meta property="og:title" content="MyCoin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://insight3d.github.io/MyCoin/public/logo.png" />
        <meta property="og:url" content="http://mycoin.insight3d.tech" />
        <meta name="twitter:card" content="summary" />

        <meta property="og:description" content=" InSight3D MyCoin is a free mock crypto exhange that grants users $10,000 to buy and sell 100+ coins at live market price. The coins as well as money will have no real value, as it is a mock exchange. " />
        <meta property="og:site_name" content="MyCoin by InSight3D=" />
        <meta name="twitter:image:alt" content="MyCoin" />

      </Head>
      <div className='flex flex-col'>
        <div className='flex relative h-10 mb-auto'>
          {/* Text and input field */}
          <div className=' relative ml-52 space-y-8 mt-28'>
            <p className='text-4xl font-extrabold w-[560px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <form className='flex items-center'>
              <div className='relative flex items-center drop-shadow-lg text-gray-600 focus-within:text-gray-900'>
                <MailIcon className="h-10 w-10 text-grey-400 absolute pointer-events-none pl-2" />
                <input className=' h-[58px] w-[300px] rounded-2xl pl-12 pr-3 font-semibold border-none ring-2 ring-gray-200'></input>
              </div>
              <button className='bg-black h-[54px] right-[146px] rounded-2xl p-[13px] ml-2'>
                <span className='text-white text-[12px] font-extrabold'>
                  Get Started Today!
                </span>
              </button>
            </form>

          </div>



          {/* Logo */}
          <div className='absolute right-0 pr-52 mt-[62px]'>
            <Image src="/logo.svg" width="269" height="272" alt="logo" />
          </div>
        </div>
       
        <div className='relative w-full h-96 my-96 bg-[#80E8EC] '>
          <div className='text-center text-2xl font-bold '>
            <p>MyCoin Academy</p>
          </div>
          <div className=" absolute left-0 right-0 bottom-[-55px] flex items-center justify-center">
            <div className="grid grid-cols-3 gap-24 p-5">
              <div className=" bg-white border-2 flex flex-col items-center rounded-3xl text-white text-lg font-bold text-center px-20 py-10 drop-shadow-lg  ">
                <FaSchool className='text-black text-[200px]'/>
                <PurpleButton/>
              </div>
              <div className=" bg-white border-2 flex flex-col items-center rounded-3xl text-white text-lg font-bold text-center px-20 py-10 drop-shadow-lg">
                <BsCoin className='text-black text-[150px] mb-[50px]'/>
                <PurpleButton/>
              </div>
              <div className="  bg-white border-2 flex flex-col items-center rounded-3xl text-white text-lg font-bold text-center px-20 py-10 drop-shadow-lg">
                <FaEthereum className='text-black text-[150px] mb-[50px]'/>
                <PurpleButton/>
              </div>
            </div>
          </div>


  

        </div>
      </div>

    </>
  );

}


