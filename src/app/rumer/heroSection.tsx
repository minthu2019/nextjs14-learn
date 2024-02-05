import React from 'react'
import Image from 'next/image'
import collectionImage from '../../../public/Image/best_fashion_image.png'

const heroSection = () => {
  return (
    <div className=' flex items-center justify-center flex-col'>
      <div className='flex items-center justify-center flex-col gap-2'>
        <h1 className='text-3xl text-black font-black uppercase text-center
        w-[300px] m-4 bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent'>
            best fashion since 2024
        </h1>
        <p className=' text-xs w-[300px] text-center uppercase
        mb-4'>
        hello my name is min thu khaing 
         i am from myanmar  now i wanna 
         tell you something about  hello my name is
         min thu khaing  i am from myanmar
         now i wanna tell you something
        about  hello my name is min thu 
        khaing  i am from myanmar  
        </p>
      </div>

      <div className=' relative'>
        <div className=' m-3 mt-60 '>
            <Image 
            src={collectionImage}
            alt='CollectionImage'
            width={300}
            height={300}
            className=''/>
            
        </div>

        <div className=' absolute bottom-72 right-2 flex flex-col items-center justify-center
                gap-4 p-2 bg-white shadow-lg shadow-blue-500 rounded-lg'>
            <div className='flex flex-col text-center'>
                <span className='text-3xl font-black'>2024</span>
                <span className=' '>fashion fiunded</span>
            </div>
            <div className='w-[100px] bg-gray-500 h-[1px]'></div>
            <div className='flex flex-col text-center'>
                <span className='text-3xl font-black'>8900+</span>
                <span className=' '>produt sold</span>
            </div>
            <div className='w-[100px] bg-gray-500 h-[1px]'></div>
            <div className='flex flex-col text-center'>
                <span className='text-3xl font-black'>3105+</span>
                <span className=' '>best review</span>
            </div>
        </div>
      </div>

      <div className='h-1 w-[300px] bg-blue-500 m-10 rounded-lg shadow shadow-blue-600'></div>
    </div>
  )
}

export default heroSection
