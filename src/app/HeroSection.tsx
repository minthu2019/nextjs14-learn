import React from 'react'
import Navbar from './ui/navbar'
import Image from 'next/image'
import CraftyCrew from '../../public/Image/crafty-crew-logo.jpg'



const HeroSection = () => {
  return (
    <section className='relative max-w-[1280px] min-h-screen mx-auto bg-gradient-to-b from-[#2B616F] via-[#CAA15B] to-[#F5F9E2]  '>
      <Navbar/>
      <div className='max-w-[1175px] mx-auto grid md:grid-cols-2  mt-10  gap-4 items-center'>
        <div  className='flex items-center justify-center md:items-start  flex-col'>
            <h1 className=' text-3xl md:text-7xl text-white font-black
             mb-6 w-60 mx-auto md:w-full text-center md:text-left'>Crafty Crew (CTC)</h1>
            <p className=' w-[220px] mb-4  text-center text-xs font-bold md:text-left'>
              Crafty crew begin in 2024 with 5 player that  ..........
            </p>
            <ul className=' w-[250px] flex items-center justify-center flex-col gap-1 text-black'>
              <li className=' font-bold text-[10px] flex items-start justify-between'>
                 <span className='mr-7'>Flash(Min Zayar Lwin)</span> 
                 <span>Mid Lane</span> 
              </li>
              <li className=' font-bold text-[10px] flex items-center justify-between'>
                 <span className='mr-7'> Hunter(Min Htet Aung) </span>
                  <span>Gold Lane</span> 
              </li>
              <li className=' font-bold text-[10px] flex items-center justify-between'> 
                <span className='mr-7'>Travelling (Min Thu Khaing)</span> 
                <span>Jungle</span> 
             </li>
              <li className=' font-bold text-[10px] flex items-center justify-between'>
                <span className='mr-7'>Ezio (Min Thant Kyaw)</span> 
                <span>Rumer</span> 
            </li>
              <li className=' font-bold text-[10px] flex items-center justify-between'>
                 <span className='mr-7'>Just Sat(Zaw Paing Htun)</span> 
                 <span>Exp lane</span> 
              </li>
            </ul>
        </div>
        <div className='flex items-center justify-center md:justify-end  mt-9 cursor-pointer w-[300px] md:w-auto h-auto md:h-[400px] mx-auto mb-10 md:mb-5'>
            <Image 
            src={CraftyCrew}
            alt='CraftyCrew'
            width={200} 
            
            />
        </div>
      </div>
    </section >
  )
}

export default HeroSection
