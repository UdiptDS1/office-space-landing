import React from 'react'

import kp1 from '../assets/kp1.jpg';
import kp2 from '../assets/kp2.jpg';
import kp3 from '../assets/kp3.jpeg';
import kp4 from '../assets/kp4.jpg';
import kp5 from '../assets/kp5.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>High-End Office Spaces</h1>
        <p className='py-4'>The Most Exclusive Locations</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={kp1} alt="/" />
            <img className='w-full h-full object-cover' src={kp2} alt="/" />
            <img className='w-full h-full object-cover' src={kp3} alt="/" />
            <img className='w-full h-full object-cover' src={kp4} alt="/" />
            <img className='w-full h-full object-cover' src={kp5} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations