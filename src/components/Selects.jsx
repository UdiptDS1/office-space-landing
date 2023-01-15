import React from 'react'

import kp1 from '../assets/kp1.jpg';
import kp2 from '../assets/kp2.jpg';
import kp3 from '../assets/kp3.jpeg';
import kp4 from '../assets/kp4.jpg';
import kp5 from '../assets/kp5.jpg';
import kp6 from '../assets/kp6.webp';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={kp1} text='Park Street' />
    <SelectsCard bg={kp2} text='Liver Street' />
    <SelectsCard bg={kp3} text='Stock Street' />
    <SelectsCard bg={kp4} text='Rezzel Street' />
    <SelectsCard bg={kp5} text='Roger Street' />
    <SelectsCard bg={kp6} text='Palm Street' />
    
        
    </div>
  )
}

export default Selects