import Head from 'next/head';
import { useState, useEffect } from 'react'
import axios from "axios";
import Navigation from '../components/Header';
import Footer from '../components/footer';



export default function Home() {
  // new line start



  return (
    <>
      <Head>
        <title>My Coin</title>
        <meta property="og:title" content="My Coin" key="title" />
      </Head>

      <div className='absoulte'>
        <Navigation/>
        {/* <Footer /> */}
      </div>
    </>
  );

}


