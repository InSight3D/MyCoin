import Layout from '../components/Layout'
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import React from 'react';
import { useRouter } from "next/router";
import { useEffect } from 'react';

 function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Layout>
  )
}

export default MyApp
