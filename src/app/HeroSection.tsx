import React from 'react'
import Navbar from './ui/navbar'
import Buttom from '@/app/ui/buttom'
import Image from 'next/image'
import Heroimage from '../../public/Image/hero_image.png'



const HeroSection = () => {
  return (
    <section className='relative max-w-[1280px] min-h-screen mx-auto bg-gradient-to-r from-[#B1BAFF] to-[#a29fad]'>
      <Navbar/>
      <div className='max-w-[1175px] mx-auto grid md:grid-cols-2  mt-10  gap-4 items-center'>
        <div  className='flex items-center justify-center md:items-start  flex-col'>
            <h1 className=' text-4xl md:text-7xl text-black font-black mb-6 w-80 md:w-full text-center md:text-left'>Find The Best Fashion style For You</h1>
            <p className=' w-[380px] text-black font-normal mb-10 text-center md:text-left'>
                hello my name is min thu khaing  i am from myanmar  
                now i wanna tell you something about my family. 
                My family have 
            </p>
            <Buttom classs='w-[220px] h-[60px]' href={"/"} title={"SHOP NOW"}/>
        </div>
        <div className='flex items-center justify-center md:justify-end  mt-24 cursor-pointer w-[300px] md:w-auto h-auto md:h-[400px] mx-auto mb-10 md:mb-5'>
            <Image 
            src={Heroimage}
            alt='heroImage'
            width={430} 
            
            />
        </div>
      </div>
    </section >
  )
}

export default HeroSection
