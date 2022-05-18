import Layout from '../components/Layout'
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import React from 'react';

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
