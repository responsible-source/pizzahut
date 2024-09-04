"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io"; 

export default function Navbar() {
  const [isOpen, Setisopen] = useState(false)

  const toggleMenu = () =>{
    Setisopen(!isOpen)
  }
  return (
    <nav className='px-5'>
      <div className='flex items-center justify-between'>
        <div>
          <Link href={'/'} className='text-Red text-[28px] md:text-[24px] font-semibold'>St Pizza</Link>
        </div>
        <div className='space-x-6 hidden md:block text-gray-500'>
          <Link href={'/'}>Home</Link>
          <Link href={''}>About</Link>  
          <Link href={''}>Contact</Link>
          <Link href={''}>Blog</Link>
        </div>
        <div className='items-center space-x-4 hidden md:block'>
        <Link href={'/login'} className='text-gray-500'>Login</Link>
        <Link href={'/register'} className='bg-Red px-6 py-2 rounded-full'>Register</Link>
        </div>
        <div onClick={toggleMenu} className='block md:hidden text-[28px]'>
        { isOpen ? <IoMdClose /> : <RxHamburgerMenu /> }
        </div>
      </div>

       {/* the drop down menu for mobile devices */}
        <div className={`bg-white mt-5 ${isOpen ? 'block top-0 right-0 left-0' : 'hidden'}`}>
          <div className='flex flex-col space-y-4'>
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>About</Link>  
          <Link href={'/'}>Contact</Link>
          <Link href={'/'}>Blog</Link>
          <Link href={'/'} className='bg-Red px-4 py-2 rounded-md w-[25%] items-center'>Login</Link>
          </div>
        </div>
    </nav>
  )
}
