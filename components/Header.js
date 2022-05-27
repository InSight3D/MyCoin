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
    <header className='ml-24 mr-24'>
      <div className="px-4 mx-auto mt-3 ">
        <div className='flex justify-between '>

          {/* logo */}
          <div className='flex space-x-4 '>
            <Link href="/" passHref>
              <div className='flex space-x-2 cursor-pointer'>
                <Image src="/logo.svg" width="80" height="50" alt="Logo" />
                <a className='flex items-center px-2 py-5'>
                  <span className='text-4xl font-extrabold'>MyCoin</span>
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
          
          <div className='flex items-center space-x-10 text-md'>
            
            <form className = "hidden md:block" action="/dashboard">
              <button  type="submit" className='px-4 py-2 m-1 font-semibold rounded-2xl hover:bg-gray-200 btn btn-outline btn-accent'>
                Login
              </button>
            </form>
            <form className = "hidden md:block" action="/dashboard">
              <button type="submit" className='px-4 py-2 m-1 font-medium text-white bg-black btn btn-outline btn-accent hover:bg-gray-700 rounded-2xl '>
                Get Started
              </button>
            </form>
          </div>

          <div className='flex items-center '>
               <GiHamburgerMenu className='w-10 h-10 ml-96 md:hidden'/>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Navigation;
