import React from 'react'
import { MailIcon } from '@heroicons/react/solid'

const Mail_Icon = () => {
    return (
        <div className='relative'>
            <div className='  h-10 w-10 bg-black rounded-full '></div>
            <MailIcon className=" absolute h-8 w-8 bottom-0 text-white hover:text-gray-500 cursor-pointer" />
        </div>
    )
}

export default Mail_Icon