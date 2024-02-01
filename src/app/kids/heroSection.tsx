import React from 'react'
import Buttom from '../ui/buttom'
import Image from 'next/image'
import kidImage from '../../../public/Image/deal_of_the_day_image.png'

const heroSection = () => {
  return (
    <div className=' min-h-screen bg-gradient-to-r from-[#B1BAFF] to-[#a29fad]'>
      <div className=' w-80 mx-auto flex flex-col items-center'>
        <h1 className=' text-3xl text-black font-black  my-6'>Deal Of The Day</h1>
        <p className=' w-[300px] mb-6 uppercase text-center text-xs font-normal text-black'>hello my name is min thu khaing  i am from myanmar 
             now i wanna tell you something about  hello my name is min </p>
        <div className='grid grid-cols-3 gap-2 p-2 mb-8'>
            <div className='flex items-center justify-center flex-col w-[80px] h-[80px] bg-white shadow-md shadow-black'>
                <span className='text-3xl text-black font-black'>03</span>
                <span>Day</span>
            </div>

            <div className='flex items-center justify-center flex-col w-[80px] h-[80px] bg-white shadow-md shadow-black'>
                <span className='text-3xl text-black font-black'>03</span>
                <span>Day</span>
            </div>

            <div className='flex items-center justify-center flex-col w-[80px] h-[80px] bg-white shadow-md shadow-black'>
                <span className='text-3xl text-black font-black'>03</span>
                <span>Day</span>
            </div>
            
        </div>
        <div>
            <Buttom classs='w-[220px] h-[60px]' href={"/"}  title={'Shop Now'}/>
        </div>
      </div>
      <div className=' p-2 mb-8'>
        <Image 
        src={kidImage}
        alt='KidImage'
        width={400}
        height={400}
        />
      </div>

      <div className=' w-8 h-8'></div>
    </div>
  )
}

export default heroSection
