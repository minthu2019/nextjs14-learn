import React from 'react'
import Navbar from '../ui/navbar'
import HeroSection from './heroSection'


const men = () => {
  return (
    <main className=" min-h-screen ">
      <Navbar/>
      <div className='max-w-[1175px] mx-auto'>
        <HeroSection/>
      </div>
    </main>
  )
  
}

export default men