import Link from 'next/link'
import axios from "axios";
import React from 'react';
import Image from 'next/image';

function login () {
  axios.post('http://localhost:5000/login', {
    email: 'neil@insight3d.tech',
    password: 'MyCoinAdmin123'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
 }

function Navigation() {
  return (
    /* navbar */
    <header className='mr-24 ml-24'>
      <div className="mx-auto px-4 mt-3 ">
        <div className='flex justify-between '>

          {/* logo */}
          <div className='flex space-x-4  '>
            <Link href="/" passHref>
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
            <a className='header-link group hover:text-gray-700' href="">
              <span className='span'>Features</span>
            </a>
            <a className='header-link group hover:text-gray-700' href="">
              <span className='span'>Team</span>
            </a>
          </div>

          {/* secondary nav */}
          <div className=' flex items-center space-x-10 text-md '>
            <button onClick={login} className=' py-2 px-4 rounded-2xl hover:bg-gray-200 btn btn-outline btn-accent m-1 font-semibold'>
              Login
            </button>
            <button className='btn btn-outline btn-accent m-1 hover:bg-gray-700 bg-black text-white py-2 px-4 rounded-2xl font-medium '>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Navigation;