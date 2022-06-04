import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { AiFillGithub, AiFillMail  } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer className=' flex justify-center space-y-6 flex-col w-[900px] md:w-full h-[300px] bg-gray-300'>

        {/* Logo and description */}
        <div className='flex flex-col items-center justify-center my-1 '>
          <p className='font-extrabold'>My Coin</p>
          <Image src="/logo.svg" width="80" height="50" alt="logo" />
          <div>
            <p className=' w-[346px] text-sm text-center font-medium'>
              Copyright 2022 MyCoin by InSight3D. All rights reserved.
            </p>
          </div>
        </div>
        {/* Links   */}
        <div className='flex items-center justify-center space-x-6 font-medium'>
          <Link href='/signup'>
            <a className='hover:text-pink-600'>Sign Up</a>
          </Link>
          <Link href='mailto://neil@insight3d.tech'>
            <a className='hover:text-pink-600'>Support</a>
          </Link>
          <Link href='https://github.com/insight3d/mycoin'>
            <a className='hover:text-pink-600'>GitHub</a>
          </Link>
          <Link href='https://insight3d.tech'>
            <a className='hover:text-pink-600'>InSight3D</a>
          </Link>
          <Link href='/academy'>
            <a className='hover:text-pink-600'>MyCoin Academy</a>
          </Link>
          <Link href='https://netlify.com'>
            <a className='hover:text-pink-600'>Netlify Host</a>
          </Link>
        </div>

         {/* Soical media Icons   */}
        <div className='flex justify-center space-x-6 '>
          <a href='https://github.com/insight3d/mycoin'>
            <AiFillGithub className="w-8 h-8 text-white cursor-pointer hover:text-gray-500" />
          </a>
          <a href="mailto://neil@insight3d.tech">
            <AiFillMail className="w-8 h-8 text-white cursor-pointer hover:text-gray-500" />
          </a>
          <a href="https://discord.gg/mycoin">
            <FaDiscord className="w-8 h-8 text-white cursor-pointer hover:text-gray-500" />
          </a>
        </div>
        <div className='flex justify-center space-x-6 '>
          <a href="https://www.netlify.com"> <img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /> </a>
        </div>
        <div className='flex justify-center space-x-6 '>
        </div>
      </footer>
    </>
  )
}

export default Footer