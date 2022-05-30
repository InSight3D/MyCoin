import Link from 'next/link'
import axios from "axios";
import React from 'react';
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";



function login() {
  axios.post('http://localhost:5000/login', {
    email: 'neil@insight3d.tech',
    password: 'MyCoinAdmin123'
  })
    .then(function (res) {

      const message = res.data.message
      // check is responce equlas Login Successful
      if (message === 'Incorrect password') {
        console.log(message);
      } else {
        console.log(message);
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log("Login Failed");
    });
}

function Navigation() {
  return (
    /* navbar */
    <header className='flex justify-between mr-24 md:block '>
      <div className="px-4 mx-auto mt-3 ">
        <div className='flex justify-between '>

          {/* logo */}
          <div className='flex space-x-4 '>
            <Link href="/" passHref>
              <div className='flex space-x-2 cursor-pointer'>
                <div className='flex items-center'>
                  <img className=' min-h-[100px] min-w-[100px] lg:h-[50px] lg:w-[50px]' src="/logo.svg" w alt="logo" />
                </div>
                <a className='flex items-center py-5'>
                  <span className='text-6xl font-extrabold md:text-4xl md:'>MyCoin</span>
                </a>
              </div>
            </Link>
          </div>

          {/* primary nav */}
          <div className=' hidden md:flex md:items-center md:space-x-[46px] md:text-xl md:font-body-500 md:font-medium'>
            <div className='header-link group hover:text-gray-700'>
              <Link href="#academy" smooth={true} passHref>
                <span className='span'>Academy</span>
              </Link>
            </div>
            <div className='header-link group hover:text-gray-700'>
              <Link href="#trading" smooth={true} passHref>
                <span className='span'>Trading</span>
              </Link>
            </div>
            <div className='header-link group hover:text-gray-700'>
              <Link href="#community" smooth={true} passHref>
                <span className='span'>Community</span>
              </Link>
            </div>
          </div>

          {/* secondary nav */}

          <div className='flex items-center justify-end space-x-10 text-md'>
            <form className="hidden text-black md:flex" action="/dashboard">
              <button type="submit" className='px-4 py-2 m-1 font-semibold text-black rounded-2xl hover:bg-gray-300 '>
                Login
              </button>
            </form>
            <form className="hidden md:flex" action="/dashboard">
              <button type="submit" className='px-4 py-2 m-1 font-medium text-white bg-black hover:bg-gray-700 rounded-2xl '>
                Get Started
              </button>
            </form>
          </div>
        </div>




      </div>
      {/* Mobile Menu */}
      <div className='flex justify-end ml-[400px] w-96'>
        <div class="w-fit h-fit  flex flex-col justify-end md:hidden p-6">
          <div class="dropdown dropdown-end text-4xl">
            <label tabindex="0">
              <GiHamburgerMenu className='w-16 h-16 md:hidden' />
            </label>
            <ul tabindex="0" class="dropdown-content space-y-6 menu p-4  shadow bg-base-100 rounded-box w-fit h-fit">
              <Link href="#academy" smooth={true} passHref>
                <span className='span'>Academy</span>
              </Link>
              <Link href="#trading" smooth={true} passHref>
                <span className='span'>Trading</span>
              </Link>
              <Link href="#community" smooth={true} passHref>
                <span className='span'>Community</span>
              </Link>
              <div class="divider"></div>
              <Link type="submit" className="hidden md:flex" href="/dashboard">
                <span >Login</span>
              </Link>
              <Link type="submit" className="hidden md:flex" href="/dashboard">
                <span >Get Started</span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header >

  );
}

export default Navigation;
