import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import axios from "axios";
import Navigation from '../components/Header';
import Footer from '../components/Footer';
import { MailIcon } from '@heroicons/react/solid'




export default function Home() {

  return (
    <>
      <Head>
        <title>My Coin</title>
        <meta property="og:title" content="My Coin" key="title" />
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

        <div className=' w-full h-96 my-80 bg-[#80E8EC]'>

          {/*  <div className=' w-full h-96 my-80 grid grid-rows-3 gap-4 '>
            <div className=' border-2 border-red-500'>
              <div className='bg-gray-400 h-16'></div>
              <div className='bg-gray-400 h-16'></div>
              <div className='bg-gray-400 h-16'></div>
            </div>
        </div> */}
        
        </div>
      </div>

    </>
  );

}


