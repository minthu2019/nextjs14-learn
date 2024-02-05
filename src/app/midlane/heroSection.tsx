import React from 'react'
import Image from 'next/image'
import Flash from '../../../public/Image/flash.jpg'




const heroSection = () => {
  return (
    <div> 
      <div className=' w-auto md:w-[860px] mx-auto flex items-center justify-center flex-col mt-5'>
        <h1 className=' w-[220px] text-black text-center text-[16px] uppercase 
        md:text-6xl font-black py-2 m-5  md:w-full '>flash (min zayar lwin) Mid lane</h1>
        <p className=' md:w-auto w-[220px] text-[10px] text-black font-normal 
        text-center md:text-left mb-5'>HE IS A MID LANE PLAYER FROM TEAM CRAFTY CREW(CTC) . HE IS VER STRONG FOR MID LANE.HE IS MIN ZAYAR LWIN . HIS IN GAME NAME IS FLASH .  </p>
      </div>
      <div className=' grid md:grid-cols-3 gap-4 m-2 mb-7'>
        <div  className='relative flex items-center justify-center 
        shadow-lg shadow-black md:w-auto w-[220px] mx-auto z-0'>
            <Image
            src={Flash}
            alt='Flash'
            width={220}/>

        </div>
        
      </div>
    </div>
  )
}
export default heroSection
