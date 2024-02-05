'use client'
import Link from "next/link"
import {inter} from './font'

const logo = () => {
  return (
    <div>
      <Link href={"/"} className={`${inter.className} flex items-center justify-center flex-col text-white`}>
         <p className=" font-black text-[14px] uppercase " >Crafty</p>
         <span className="text-[10px] font-black">Crew (CTC)</span>
         </Link>
    </div>
  )
}

export default logo



