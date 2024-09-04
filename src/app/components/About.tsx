import React from 'react'
import Subheading from './Subheading'

const About = () => {
  return (
    <div className='text-center my-16'>
        <Subheading header={'our story'} subheader={'About Us'} />
        <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium in nisi quae totam eum ipsa consequatur quia reiciendis doloremque numquam, modi dolore vel placeat perspiciatis dignissimos sunt quam deserunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quasi eius pariatur eaque quidem, obcaecati labore quos veniam similique blanditiis aspernatur reiciendis illo suscipit.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, nisi fuga vero eos veniam a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eligendi?</p>
        </div>
    </div>
  )
}

export default About