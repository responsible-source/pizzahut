import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center mt-16 md:mt-10 gap-8 px-5'>
        <div className='w-[100%] md:w-[45%]'>
            <h3 className='text-4xl font-bold pb-3'>Everything Is Better With A Pizza</h3>
            <p className='text-[12px] text-gray-500'>Pizza is the missing piece that makes everyday complete, a simple yet delicious joy in life</p>
            <div className='flex gap-2 mt-3'>
                <button className='bg-Red px-4 py-2 rounded-md'>Order Now</button>
                <button className='flex items-center gap-1'>Learn More <IoMdArrowRoundForward /></button>
            </div>
        </div>
        <div className='w-[100%] md:w-[55%]'>
            <img src="/pizza.png" alt="pizza" className='object-contain' />
        </div>
    </div>
  )
}

export default Hero 