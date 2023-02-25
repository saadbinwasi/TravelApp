import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240] mx-auto flex flex-col px-4'>
<div className='sm:flex text-center justify-between items-center'>
    <h1>heyTravel.</h1>
    <div className='flex justify-between w-full sm:max-w-[200px] my-4'>
    <FaFacebook className='icon'/>
          <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>

    </div>
</div>
<div className='flex justify-between'>
    <ul>
        <li>About</li>
        <li>Partnerships</li>
        <li>Careers</li>
        <li>Newsroom</li>
    </ul>
    <ul className='text-right'>
        <li>Home</li>
        <li>Travel</li>
        <li>View</li>
    </ul>
</div>
        </div>
      
    </div>
  )
}

export default Footer
