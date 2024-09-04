import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import HomeMenu from './components/HomeMenu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Hero />
      <HomeMenu />
      <About />
      <Contact />
    </div>
  )
}

export default page