import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

export const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 px  bg-white'>
        <div className='max-w-[1240px] max-auto grid md:grid-cols-3 gap-8 mx-auto'>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg items-center justify-center hover:scale-105 duration-100  '>
                <img className='w-20 mx-auto bg-white'src={Single} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='mx-auto font-bold mb-2'>$149</p>

                <div className='mx-auto font-thin'>
                    <p>Python Fullstack</p>
                    <p>For 1 Student</p>
                    <p>offer  up to 20%</p>

                </div>
                    <button className=' bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto py-3 text-black '>Buy Now</button>

            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg items-center justify-center hover:scale-105 duration-100 '>
                <img className='w-20 mx-auto bg-white'src={Double} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                <p className='mx-auto font-bold mb-2'>$290</p>

                <div className='mx-auto font-thin'>
                    <p>Python fullstack, soft skills</p>
                    <p></p>
                    <p>Save up to 30%</p>

                </div>
                    <button className=' bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto py-3 text-black '>Buy Now</button>

            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg items-center justify-center hover:scale-105 duration-100 '>
                <img className='w-20 mx-auto bg-white'src={Triple} alt="/" />
                <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                <p className='mx-auto font-bold mb-2'>$600</p>

                <div className='mx-auto font-thin'>
                    <p>Python fullstack,Soft skills, placement</p>
                    <p></p>
                    <p> Save upto 40%</p>

                </div>
                    <button className=' bg-[#00df9a] w-[150px] rounded-md my-6 mx-auto py-3 text-black '>Buy Now</button>

            </div>

        </div>
    </div>
  )
}
