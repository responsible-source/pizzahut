import React from 'react'
import Subheading from './Subheading'

const Contact = () => {
  return (
    <div className='text-center my-8'>
        <Subheading header={"Don't Hesitate"} subheader={'Contact Us'} />
        <div className='mt-8'>
            <a className='text-4xl underline text-gray-500' href="tel:+2349064892590">09064892590</a>
        </div>
    </div>
  )
}

export default Contact