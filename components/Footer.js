import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className=' fixed bottom-0 flex flex-col justify-center items-center w-full h-[300px] bg-blue-400'>
        <div>

          <p>My Coin</p>
          <Image src="/logo.svg" width="80" height="50" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque commodo vulputate rhoncus, feugiat in.
            </p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Footer