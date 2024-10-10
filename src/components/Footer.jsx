import React from 'react';
import {

    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='w-full text-white '>
            <div className='md:flex-row max-w-[1240px]  mx-auto py-8 px-4 flex flex-col '>
                <div className='py-4 p-6'>
                    <h1 className='text-[#00df9a] font-bold text-2xl'>DevAnil.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quos tempore itaque nostrum doloribus a hic porro ut maiores ab error vel impedit quam deserunt ullam ipsam earum, commodi veritatis.</p>
                    <div className='py-2  flex gap-2'>
                        <FaDribbbleSquare size={30} />
                        <FaFacebookSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaInstagramSquare size={30} />
                        <FaTwitterSquare size={30} />
                    </div>
                </div>

                <div className=' py-3 flex  gap-5  '> 
                    <div className=' ml-5 p-2'>
                        <p className='mb-2 border-b border-gray-100'>Solutions</p>
                        <p className='mb-2 border-b border-gray-100'>Analytics</p>
                        <p className='mb-2 border-b border-gray-100'>Marketing</p>
                        <p className='mb-2 border-b border-gray-100'>Insights</p>

                    </div>
                    <div className='ml-5 p-2'>
                        <p className='mb-2 border-b border-gray-100'>Support</p>
                        <p className='mb-2 border-b border-gray-100'>Pricing</p>
                        <p className='mb-2 border-b border-gray-100'>Documentation</p>
                        <p className='mb-2 border-b border-gray-100'>Api status</p>
                    </div>
                    <div className='ml-5 p-2'>
                        <p className='mb-2 border-b border-gray-100'>Company</p>
                        <p className='mb-2 border-b border-gray-100'>About</p>
                        <p className='mb-2 border-b border-gray-100'>Solutions</p>
                        <p className='mb-2 border-b border-gray-100'>Press</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
