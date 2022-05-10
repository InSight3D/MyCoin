import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import axios from "axios";
import Navigation from '../components/Header';
import Footer from '../components/footer';
import { MailIcon } from '@heroicons/react/solid'




export default function Home() {




  return (
    <>
      <Head>
        <title>My Coin</title>
        <meta property="og:title" content="My Coin" key="title" />
      </Head>

      <div className='flex'>
        {/* Text and input field */}
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <div className='h-8 w-8 bg-black rounded-full'></div>
          <MailIcon className="h-8 w-8 text-black hover:text-gray-500 cursor-pointer" />
          <div className='absolute'>
            <input className='border-2 h-14 w-[436px] rounded-2xl'></input>
            <button className='bg-black relative right-[130px] h-14 rounded-r-2xl'>
              <span className='text-white text-xsm'>
                Get Started Today!
              </span>
            </button>
          </div>
        </div>

        {/* Logo */}
        <div>
          <Image src="/logo.svg" width="300" height="280" alt="logo" />
        </div>
      </div>

    </>
  );

}


