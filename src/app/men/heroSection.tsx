import React from 'react'
import Image from 'next/image'
import menImage from '../../../public/Image/new_collection_image.png'
import menImage2 from '../../../public/Image/new_collection_image_2.png'
import menImage3 from '../../../public/Image/new_collection_image_3.png'



const heroSection = () => {
  return (
    <div> 
      <div className=' w-auto md:w-[860px] mx-auto flex items-center justify-center flex-col mt-5'>
        <h1 className='text-black text-center text-4xl 
        md:text-6xl font-black py-2 m-5 w-80 md:w-full '>New Men All Collection</h1>
        <p className=' md:w-auto w-[300px] text-black font-normal text-center md:text-left mb-5'>Hello My Name is Min Thu Khaing I am From Myanmar I Wanna Tell You Something About My Family </p>
      </div>
      <div className=' grid md:grid-cols-3 gap-4 m-2 mb-7'>
        <div  className='relative flex items-center justify-center 
        shadow-lg shadow-black md:w-auto w-[300px] mx-auto z-0'>
            <Image
            src={menImage}
            alt='menimage'/>
            <button className=' absolute bottom-4 w-[200px] h-[50px] md:w-[315px] md:h-[70px]
             bg-gradient-to-tr from-[#B1BAFF] to-[#A69FBE]'>SWEATER</button>
        </div>
        <div className='relative flex items-center justify-center 
        shadow-lg shadow-black md:w-auto w-[300px] mx-auto z-0'>
            <Image
            src={menImage2}
            alt='menimage'/>
            <button className='absolute bottom-4 w-[200px] h-[50px] md:w-[315px] md:h-[70px]
             bg-gradient-to-tr from-[#B1BAFF] to-[#A69FBE]'>SWEATER</button>
        </div>
        <div className=' relative flex items-center justify-center 
        shadow-lg shadow-black md:w-auto w-[300px] mx-auto z-0'>
            <Image
            src={menImage3}
            alt='menimage'/>
            <button className='absolute bottom-4 w-[200px] h-[50px] md:w-[315px] md:h-[70px]
             bg-gradient-to-tr from-[#B1BAFF] to-[#A69FBE]'>SWEATER</button>
        </div>
      </div>
    </div>
  )
}
export default heroSection
