import React from 'react'

export const Newsletter = () => {

  return (
    <div className='w-full py-16 text-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>

        <div className='ml-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your workflow</h1>
          <p>Sign up to our newsltter stay up to date </p>
        </div>

        <div className='flex md: justify-center items-center flex-col  '>


          <input className=' bg-gray-300 rounded-md   my-6  py-2 text-black  ml-2 md: w-[90%] ' type="text" name="" id="" placeholder='  notify ' />
          <button className='bg-[#00df9a] w-[100px] rounded-md my-2 py-2 text-black ml-2'>Notify Me</button>
          <div>

          <p className='text-gray-200'>We care about yours</p>
          </div>

        </div>


      </div>

    </div>
  )
}
