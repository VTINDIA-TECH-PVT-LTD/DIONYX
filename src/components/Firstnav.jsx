import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";



const Firstnav = () => {
    
  return (
    <div className='w-full h-fit bg-orange-600 text-white p-4 flex justify-between items-center'>
        
        <div className='flex items-center space-x-4 sm:space-x-8 flex-wrap'>
            <div className='flex items-center space-x-2'>
                <FaPhoneAlt />
                 <p className='cursor-pointer'>9999999999</p>
            </div>
            <div className='flex items-center space-x-2'>
                <MdEmail />
                 <p className='cursor-pointer'>Pralin@gmail.com</p>
            </div>
            <div className='flex items-center space-x-2'>
                <FaLocationArrow />
                 <p className='cursor-pointer'>cuttack,odisha</p>
            </div>
            
            
        </div>

       
        
    </div>
  )
}

export default Firstnav