import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import axios from "axios";
import Navigation from '../components/Header';
import Footer from '../components/Footer';
import { MailIcon } from '@heroicons/react/solid'
import { FaSchool, FaEthereum } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { CgCommunity } from "react-icons/cg";
import { useUser } from '@auth0/nextjs-auth0';
import PurpleButton from '../components/buttons/PurpleButton';
import Checkmark from '../components/misc/Checkmark';
import { redirect } from 'next/dist/server/api-utils';

export default function Home() {
  const { user, error, isLoading } = useUser();

  // check if user is equal to undefined
  if (user) {
    console.log(user)
    axios.post('http://localhost:5000/account/login', {
      email: user.email,
      given_name: user.given_name,
      family_name: user.family_name,
    })
      .then(function (res) {
        // redirect to dashboard page
        console.log('Redirecting to dashboard page');
        return (
          <>
            <Head>
              <meta httpEquiv="Refresh" content="0; url='http://localhost:3000/dashboard'" />
            </Head>
          </>
        )
      })
  }
  return (
    <>
      <Head>
        <title>My Coin</title>
        <meta property="og:title" content="MyCoin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://insight3d.github.io/MyCoin/public/logo.png" />
        <meta property="og:url" content="http://mycoin.insight3d.tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content=" InSight3D MyCoin is a free mock crypto exhange that grants users $10,000 to buy and sell 100+ coins at live market price. The coins as well as money will have no real value, as it is a mock exchange. " />
        <meta property="og:site_name" content="MyCoin by InSight3D" />
        <meta name="twitter:image:alt" content="MyCoin" />
      </Head>

      <div className=' h-full '>
        <div className='flex flex-col mb-80'>
          <div className='flex relative h-10 mb-[450px]'>
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
        </div>

        {/* Light Blue section */}
        <div>
          <div className='relative w-full h-96  bg-[#80E8EC]'>
            <div className='text-center text-5xl font-extrabold pt-20'>
              <p>MyCoin Ecosystem</p>
            </div>
            <div className="absolute left-0 right-0 bottom-[-55px] flex items-center justify-center">
              <div className="grid grid-cols-3 gap-36">
                <div className=" bg-white  flex flex-col h-60 items-center space-y-7 rounded-3xl text-white text-lg font-bold text-center px-20 py-6 drop-shadow-lg  ">
                  <FaSchool className='text-black text-[150px]' />
                  <PurpleButton />
                </div>
                <div className=" bg-white  flex flex-col h-60 items-center space-y-10 rounded-3xl text-white text-lg font-bold text-center px-20 py-10 drop-shadow-lg">
                  <BsCoin className='text-black text-[100px] ' />
                  <PurpleButton />
                </div>
                <div className="  bg-white flex flex-col justify-between h-60 items-center   rounded-3xl text-white text-lg font-bold text-center px-20 py-10 drop-shadow-lg">
                  <FaEthereum className='text-black text-[100px] ' />
                  <PurpleButton className="mt-[100px]" />
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className='mt-[228px] flex justify-center' id="academy">
            <div className='grid grid-cols-2 grid-rows-2 gap-x-60 gap-y-52'>
              <div className='h-[514px] w-[454px] '>
                <div>
                  <div className='flex items-center space-x-6'>
                    <FaSchool className='text-black text-[110px]' />
                    <h1 className='font-bold text-4xl'>MyCoin Academy </h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. s</p>
                  <h1 className='mt-4 mb-2  font-bold'>Features</h1>
                  <div className="grid grid-cols-2 grid-rows-6 ml-8">
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                  </div>
                </div>
              </div>
              <div className='h-[514px] w-[454px] bg-gray-400 rounded-3xl'></div>
              <div className='h-[514px] w-[454px] bg-gray-400 rounded-3xl'></div>
              <div className='h-[514px] w-[454px]' id="trading">
                <div>
                  <div className='flex items-center space-x-6'>
                    <BsCoin className='text-black text-[100px] ' />
                    <h1 className='font-bold text-4xl'>MyCoin Trading </h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. s</p>
                  <h1 className='mt-4 mb-2  font-bold'>Features</h1>
                  <div className="grid grid-cols-2 grid-rows-6 ml-8">
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                  </div>
                </div>
              </div>
              <div className='h-[514px] w-[454px] ' id="community">
                <div>
                  <div className='flex items-center space-x-6'>
                    <CgCommunity className='text-black text-[110px]' />
                    <h1 className='font-bold text-4xl'>MyCoin Community </h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. s</p>
                  <h1 className='mt-4 mb-2  font-bold'>Features</h1>
                  <div className="grid grid-cols-2 grid-rows-6 ml-8">
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                    <Checkmark />
                  </div>
                </div>
              </div>
              <div className='h-[514px] w-[454px] bg-gray-400 rounded-3xl'></div>
            </div>
          </div>

          <form>
            <div className='flex justify-center items-center'>
              <div className='flex items-center p-8 mb-10 mt-32 w-7xl bg-gray-400 rounded-3xl'>
                <div className='relative flex items-center drop-shadow-lg text-gray-600 focus-within:text-gray-900'>
                  <MailIcon className="h-20 w-20 text-grey-400 absolute pointer-events-none pl-2" />
                  <input className=' h-[80px] w-[800px] rounded-2xl pl-20 pr-6 font-semibold border-none ring-2 ring-gray-200 text-4xl'></input>
                </div>
                <div>
                  <button className='bg-black h-[80px] w-72 right-[146px] rounded-2xl p-[13px] ml-2'>
                    <span className='text-white text-[15px] font-extrabold'>
                      Get Started Today!
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );

}
