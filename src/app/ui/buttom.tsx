import React from 'react'
import Link from 'next/link'

const buttom = ({title,href ,classs} : {title:string ,href:string ,classs:string}) => {
  return (
    <Link 
    className={`${classs} flex items-center justify-center
                text-white bg-black rounded-xl font-bold  hover:bg-transparent hover:border-2
                hover:border-blue-700 hover:text-black`}
    href={href}> 
      <span className='' >{title}</span>
    </Link>
  )
}

export default buttom
