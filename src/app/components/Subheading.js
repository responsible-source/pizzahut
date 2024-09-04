import React from 'react'

export default function Subheading({header, subheader}) {
  return (
    <>
     <div className='text-center mb-4'>
            <h3 className='uppercase text-gray-500 font-semibold leading-4'>
                {header}
            </h3>
            <h2 className='text-Red font-bold text-4xl italic'>
                {subheader}
            </h2>
        </div>
    </>
  )
}
