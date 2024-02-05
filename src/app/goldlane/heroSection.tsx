'use client'
import React from 'react'
import Card from '@/app/ui/card'




const cardlinks = [
    {
        src : '/Image/our_product_image.png' ,
        alt : "WomenImage1" ,
        title : 'Pastel Pong Sleeve',
        mainPrice: '$220',
        discountedPrice : "$140"
    },
    {
        src : '/Image/our_product_image_2.png' ,
        alt : "WomenImage1" ,
        title : 'Pastel Pong Sleeve',
        mainPrice: '$220',
        discountedPrice : "$140"
    },
    {
        src : '/Image/our_product_image_3.png' ,
        alt : "WomenImage1" ,
        title : 'Pastel Pong Sleeve',
        mainPrice: '$220',
        discountedPrice : "$140"
    },
    {
        src : '/Image/our_product_image_4.png' ,
        alt : "WomenImage1" ,
        title : 'Pastel Pong Sleeve',
        mainPrice: '$220',
        discountedPrice : "$140"
    },
    {
        src : '/Image/our_product_image_5.png' ,
        alt : "WomenImage1" ,
        title : 'Pastel Pong Sleeve',
        mainPrice: '$220',
        discountedPrice : "$140"
    },
    {
        src : '/Image/our_product_image_6.png' ,
        alt : "WomenImage1" ,
        title : 'Pastel Pong Sleeve',
        mainPrice: '$220',
        discountedPrice : "$140"
    },
    {
        src : '/Image/our_product_image_7.png' ,
        alt : "WomenImage1" ,
        title : 'Pastel Pong Sleeve',
        mainPrice: '$220',
        discountedPrice : "$140"
    },
    {
        src : '/Image/our_product_image_8.png' ,
        alt : "WomenImage1" ,
        title : 'Pastel Pong Sleeve',
        mainPrice: '$220',
        discountedPrice : "$140"
    },
   
]

const heroSection = () => {
  return (
    <div>
        <div className=' flex items-center justify-center flex-col m-2'>
            <h1 className=' text-3xl font-black bg-clip-text 
            text-transparent bg-gradient-to-r from-blue-500
             to-black my-4'>Our Products</h1>
            <ul className=' flex items-center justify-center gap-3 mb-4'>
                <li className=' text-xs font-bold border-b-2 border-black'>HOT</li>
                <li className=' text-xs font-normal '>ONSALE</li>
                <li className=' text-xs font-normal '>TRENDINGNOW</li>
                <li className=' text-xs font-normal '>NEWARRIVAL</li>
            </ul>
        </div>

      <div >
       <Card links={cardlinks}/>
      </div>
    </div>
  )
}

export default heroSection
