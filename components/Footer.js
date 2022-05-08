import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { DotsCircleHorizontalIcon } from '@heroicons/react/solid'


const Footer = () => {
  return (
    <>
      <footer className=' flex justify-center absolute bottom-0 space-y-6 flex-col w-full h-[300px] bg-gray-300'>

        {/* Logo and description */}
        <div className=' flex flex-col my-1  justify-center items-center'>
          <p className='font-extrabold'>My Coin</p>
          <Image src="/logo.svg" width="80" height="50" alt="logo" />
          <div>
            <p className=' w-[346px] text-sm text-center font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque commodo vulputate rhoncus, feugiat in.
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
          <DotsCircleHorizontalIcon className="h-8 w-8 text-white hover:text-gray-500 cursor-pointer" />
          <DotsCircleHorizontalIcon className="h-8 w-8 text-white hover:text-gray-500 cursor-pointer" />
          <DotsCircleHorizontalIcon className="h-8 w-8 text-white hover:text-gray-500 cursor-pointer" />
          <DotsCircleHorizontalIcon className="h-8 w-8 text-white hover:text-gray-500 cursor-pointer" />
        </div>
      </footer>
    </>
  )
}

export default Footer