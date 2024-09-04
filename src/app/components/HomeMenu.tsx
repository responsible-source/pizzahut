import React from 'react'
import MenuItem from './MenuItem'
import Subheading from './Subheading'

const HomeMenu = () => {
  return (
    <div >
        <div className='absolute left-0 right-0 w-full justify-start'>
            <div className='absolute left-0 -top-[70px] text-left -z-10'>
                <img src="/sallad1.png" alt="sallad" className='w-[109px] h-[189px]' />
            </div>
            <div className='absolute -top-[100px] right-0 -z-10'>
                <img src="/sallad2.png" alt="sallad" className='w-[107px] h-[195px]' />
            </div>
        </div>
        <Subheading header={'check out'} subheader={'Menu'} />

        <div className='grid grid-cols-3 gap-4'>
           <MenuItem />
           <MenuItem />
           <MenuItem />
           <MenuItem />
           <MenuItem />
           <MenuItem />
        </div>
    </div>
  )
}

export default HomeMenu