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
          <input className='border-2'>
          </input>
        </div>

        {/* Logo */}
        <div>
          <Image src="/logo.svg" width="300" height="280" alt="logo" />
        </div>
      </div>

    </>
  );

}


