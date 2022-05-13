import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { DotsCircleHorizontalIcon, MailIcon, CodeIcon, ChatIcon, LockClosedIcon } from '@heroicons/react/solid'
import { AiFillGithub, AiOutlineMail  } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className=' flex justify-center space-y-6 flex-col w-full h-[300px] bg-gray-300'>

        {/* Logo and description */}
        <div className=' flex flex-col my-1  justify-center items-center'>
          <p className='font-extrabold'>My Coin</p>
          <Image src="/logo.svg" width="80" height="50" alt="logo" />
          <div>
            <p className=' w-[346px] text-sm text-center font-medium'>
              Copyright 2022 MyCoin by InSight3D. All rights reserved.
            </p>
          </div>
        </div>
        {/* Links   */}
        <div className='space-x-6 flex justify-center items-center font-medium'>
          <Link href='/'>
            <a className='hover:text-pink-600'>Sign Up</a>
          </Link>
          <Link href='/'>
            <a className='hover:text-pink-600'>Live Support</a>
          </Link>
          <Link href='/'>
            <a className='hover:text-pink-600'>GitHub</a>
          </Link>
          <Link href='/'>
            <a className='hover:text-pink-600'>InSight3D</a>
          </Link>
          <Link href='/'>
            <a className='hover:text-pink-600'>MyCoin Academy</a>
          </Link>
        </div>

         {/* Soical media Icons   */}
        <div className='flex space-x-6 justify-center '>
          <AiFillGithub className="h-8 w-8 text-white hover:text-gray-500 cursor-pointer" />
          <AiOutlineMail className="h-8 w-8 text-white hover:text-gray-500 cursor-pointer" />
          <FaDiscord className="h-8 w-8 text-white hover:text-gray-500 cursor-pointer" />
        </div>
      </footer>
    </>
  )
}

export default Footer