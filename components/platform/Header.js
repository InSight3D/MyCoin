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
            <a className='header-link group hover:text-gray-700' href="/dashboard">
              <span className='span'>Dashboard</span>
            </a>
            <a className='header-link group hover:text-gray-700' href="/trade">
              <span className='span'>Trade</span>
            </a>
            <a className='header-link group hover:text-gray-700' href="/reaserch">
              <span className='span'>Reaserch</span>
            </a>
            <a className='header-link group hover:text-gray-700' href="/academy">
              <span className='span'>Academy</span>
            </a>
          </div>

          {/* secondary nav */}
          <div className=' flex items-center space-x-10 text-md '>
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
