import React from 'react'

export default function MenuItem() {
  return (
    <div>
        <div className='bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'>
            <div className='text-center'>
            <img src="/pizza.png" alt="pizza" className='max-h-auto max-w-24 block m-auto' />
            </div>
            <h4 className='font-semibold text-xl my-3'>Pepperoni Pizza</h4>
            <p className='text-gray-500 text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, officiis.
            </p>
            <button className='mt-4 bg-Red text-white rounded-full px-8 py-2'>Add to Cart $12</button>
        </div>
    </div>
  )
}
