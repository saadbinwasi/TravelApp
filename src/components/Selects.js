import React from 'react'
import paris from '../assets/paris.jpg'
import pak from '../assets/pak.jpg'
import berlin from '../assets/berlin.jpg'
import pic3 from '../assets/pic3.jpg'
import arabia from '../assets/arabia.jpg'
import pic2 from '../assets/pic2.jpg'
import SelectedCards from './SelectedCards'


function Selects() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
     <SelectedCards bg={arabia} text='Suadia Arabia'/>
     <SelectedCards bg={paris} text='Paris'/>
     <SelectedCards bg={pak} text='Pakistan'/>
     <SelectedCards bg={berlin} text='Berlin'/>
     <SelectedCards bg={pic2} text='Thailand'/>
     <SelectedCards bg={pic3} text='Northern side Pakistan'/>
    </div>
  )
}

export default Selects
