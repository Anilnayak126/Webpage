import React from 'react'
import {AiOutlineClose,AiOutlineMenu}from 'react-icons/ai'

import { useState } from 'react'


export const Navbar = () => {

    const [nav,setNav] = useState(true)
    

    function handleNav(){
        setNav(!nav)
    }
  return (
    <div className= 'flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>

        <h1 className='w-full text-3xl text-[#00df9a] font-bold'>React.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            { !nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }

            

        </div>
       
        <div className={!nav ? 'block md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500' : 'block md:hidden fixed  top-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] left-[-100%] ease-in-out duration-700'}>
        <h1 className='w-full text-3xl text-[#00df9a] m-5 font-bold'>React.</h1>

            <ul className=' p-4 uppercase'>
            <li className='p-4 border-b border-gray-500'>Home</li>
            <li className='p-4 border-b border-gray-500'>Company</li>
            <li className='p-4 border-b border-gray-500'>Resources</li>
            <li className='p-4 border-b border-gray-500'>About</li>
            <li className='p-4 border-b border-gray-500'>Contact</li>
            </ul>
        </div>

    </div>
  )
}
