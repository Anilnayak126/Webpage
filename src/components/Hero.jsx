import React from 'react'
// import Typed from 'react-typed';
import { ReactTyped } from "react-typed";

export const Hero = () => {
    return (
        <div className='text-white '>
            <div className='max-w[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
                <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA</p>
                <h1 className='font-bold md:text-7xl sm:text-6xl text-4xl md:py-6 mb-2'>Grow with Developing.</h1>

                <div className='flex justify-center'>
                    <p className='md:text-5xl sm:text-3xl font-bold  '> Fast,Flexible,Fincing for</p>

                    <ReactTyped className='md:text-5xl sm:text-3xl font-bold ml-2' strings={[
                        'PYTHON', 'REACT', 'DJANGO', "RESTAPI's"
                    ]}
                        typeSpeed={100}
                        backSpeed={120}
                        loop>
                    </ReactTyped>
                </div>
                <p className=' md:text-xl text-gray-400 mt-5 font-bold'>Moniter your Python fullstack Journey</p>
                 <button className=' bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black '>Register</button>
            </div>
        </div>
    )
}

