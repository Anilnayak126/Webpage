import React from 'react'
import Laptop from "../assets/laptop.jpg"

export const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-width-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='mx-auto' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center w-full mx-auto'>
                    <p className='text-[#00df9a] font-bold  p-1'>
                        DATA ANALYTICS DASHBOARD
                    </p>
                    <h1 className='font-bold p-1'>
                        Manaage Data Analytics Centrally
                    </h1>
                    <p className='font-normal p-1'>
                        Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Temporibus optio fugiat,
                         tempore iste sed inventore excepturi veniam fugit earum officiis ad velit quia mollitia corporis, soluta reiciendis ullam. Autem ea magni possimus perspiciatis enim?
                    </p>
                    <button className='text-[#00df9a] w-[150px] rounded-md my-6 mx-auto py-3 bg-black font-bold  '>Enroll</button>
                </div>
            </div>

        </div>
    )
}
