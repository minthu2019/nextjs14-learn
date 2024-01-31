import React from 'react'
// import Icon from '../ui/icon'
import Image from 'next/image'

interface CardProp {
    links :{
        src:  string ;
        title :string;
        alt :string;
        mainPrice:string;
        discountedPrice:string
    } []
}

const card:React.FC<CardProp>=({links})  => {
  return (
    <div className=' grid grid-cols-2 gap-2 '>
      {links.map((link,index)=>(
        <div key={index} className='flex items-center justify-center m-2 flex-col shadow-md shadow-blue-400'>
            <Image 
            src={link.src} 
            alt={link.alt} 
            width={130}
            height={100}/>

            <div className=' flex mt-4 mb-2 gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#2840F4"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#2840F4"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#2840F4"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#2840F4"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z" fill="#2840F4"/>
              </svg>
            </div>
            <p className='text-sm mb-2'>{link.title}</p>
            <div className=' text-sm mb-2'>
                <span className=' mr-2 font-thin'>{link.mainPrice}</span>
                <span>{link.discountedPrice}</span>
            </div>
        </div>
      ))}

        {/* <div className=' '>
            <Image
            src={WomenImage1}
            alt='WomenImag1'
            width={130}
            height={100}/>
            
            <div className=' flex mt-4 mb-2 gap-1'>
                <Icon />
                <Icon/>
                <Icon/>
                <Icon/>
                <Icon/>
            </div>
            <p className=' text-sm mb-2'>Pastel Pong Sleeve</p>
            <div className=' text-sm mb-2'>
                <span className=' mr-2 font-thin'>$220</span>
                <span>$140</span>
            </div> */}
      
    </div>
  )
}

export default card


