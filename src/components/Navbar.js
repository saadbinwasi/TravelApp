import React from 'react'
import { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
function Navbar() {

const [nav,setNav] = useState(false)
const [logo,setlogo] = useState(false)
const handlenav = () => {
  setNav(!nav)
  setlogo(!logo)
}
  return (

        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white cursor-pointer">
          <div>
  <h1 onClick={handlenav} className={logo ? 'hidden' : 'block'}>heyTravel.</h1>
  </div>
  <ul className='hidden md:flex'>
        <li>home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
        

      </ul>
      <div className='hidden md:flex'>
        <BsPerson size={20}/>
        <BiSearch size={20}/>
      </div>
      <div onClick={handlenav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/> }
        
      </div>
      {/*Mobile menu dropdown*/}
      <div onClick={handlenav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 px-7' : 'absolute left-[-100%]'}>
        <ul>
        <h1>heyTravel.</h1>
        <li className='border-b'>home</li>
        <li className='border-b'>Destination</li>
        <li className='border-b'>Travel</li>
        <li className='border-b'>View</li>
        <li className='border-b'>Book</li>
        <div className='flex flex-col'>
          <button className='my-6'>search</button>
          <button>Account</button>
        </div>

        <div className='flex justify-between my-6'>
          <FaFacebook className='icon'/>
          <FaTwitter className='icon'/>
            <FaInstagram className='icon'/>
            <FaYoutube className='icon'/>
        </div>

        </ul>
      </div>
      </div>
     
   
  )
}

export default Navbar
