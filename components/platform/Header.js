import Link from 'next/link'
import axios from "axios";
import React from 'react';
import Image from 'next/image';


function PlatformNavigation() {
  return (
    /* navbar */
    <header className='mr-24 ml-24'>
      <div className="mx-auto px-4 mt-3 ">
        <div className='flex justify-between '>

          {/* logo */}
          <div className='flex space-x-4  '>
            <Link href="/dashboard" passHref>
              <div className='flex space-x-2 cursor-pointer'>
                <Image src="/logo.svg" width="80" height="50" alt="Logo" />
                <a className='flex items-center py-5 px-2'>
                  <span className='font-extrabold text-4xl'>MyCoin</span>
                </a>
              </div>
            </Link>
          </div>

          {/* primary nav */}
          <div className='flex items-center space-x-[46px] text-xl font-body-500 font-medium'>
            <div className='header-link group hover:text-gray-700'>
              <Link href="/dashboard" passHref>
                <span className='span'>Dashboard</span>
              </Link>
            </div>
            <div className='header-link group hover:text-gray-700'>
              <Link href="/Trade" passHref>
                <span className='span'>Trade</span>
              </Link>
            </div>
            <div className='header-link group hover:text-gray-700'>
              <Link href="/research" passHref>
                <span className='span'>Research</span>
              </Link>
            </div>
            <div className='header-link group hover:text-gray-700'>
              <Link href="/academy" passHref>
                <span className='span'>Academy</span>
              </Link>
            </div>
          </div>

          {/* secondary nav */}
          <div className=' flex items-center space-x-10 text-md '>
            <form action="/account">
              <button type="submit" className=' py-2 px-4 rounded-2xl hover:bg-gray-200 btn btn-outline btn-accent m-1 font-semibold'>
                Account
              </button>
            </form>
            <form action="/api/auth/logout">
              <button type="submit" className='btn btn-outline btn-accent m-1 hover:bg-gray-700 bg-black text-white py-2 px-4 rounded-2xl font-medium '>
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>

  );
}

export default PlatformNavigation;
