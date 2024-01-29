'use client'
import React from 'react'
import Logo from '@/app/ui/minthu-logo'
import Navlink from '@/app/ui/navLink'
import OverlayMenu from '@/app/ui/overlayMenu'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu , AiOutlineClose } from 'react-icons/ai'


const navLinks = [
  {
    path:'/men',
    title: 'MEN'
  },
  {
    path:'/women',
    title: 'WOMEN'
  },
  {
    path:'/kids',
    title: 'KIDS'
  },
  {
    path:'/collection',
    title: 'COLLECTION'
  },
  {
    path:'/trands',
    title: 'TRENDS'
  },
]

const Navbar = () => {

  const [openNavbar, setopenNavbar] = useState(false);

  const handleClick = () => {
    setopenNavbar(!openNavbar)
  }

  return (
    <nav className=' max-w-[1175px] mx-auto bg-transparent z-10'>
      <div className=' flex items-center justify-between px-4 py-2 border-2 border-blue-800 '>
        
          <Link href={"/"}>
            <Logo/>
          </Link>
        
        <div>
          <div onClick={handleClick} className='block md:hidden'>
            {
              openNavbar? 
              <button className='flex items-center justify-center h-6 w-6 text-black font-black'>
                <AiOutlineClose className='w-full h-full'/>
              </button> 
              : 
              <button className='flex items-center justify-center h-6 w-6 text-black font-black'>
                <AiOutlineMenu className='w-full h-full'/>
              </button>
            }
          </div>

          <div className='hidden md:block'>
            <ul className=' flex flex-row space-x-8'>
              {
                navLinks.map((link,index) => 
                <li key={index}>
                  <Navlink href={link.path} title={link.title}/>
                </li>
                )
              }
            </ul>
          </div>
       </div>
      
      <button className=' w-[140px] h-[40px] hidden md:block items-center justify-center  text-white bg-black rounded-xl font-bold  hover:bg-transparent hover:border-2
                hover:border-blue-700 hover:text-black'>
        <Link href={'/login'} > Login</Link>
      </button>
      
          
      {/*  */}
         
      </div>
         {
              openNavbar? 
              <OverlayMenu links={navLinks}/>
              : 
              (null)
         }
    </nav>
  )
}

export default Navbar
