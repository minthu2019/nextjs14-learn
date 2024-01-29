'use client'
import Link from "next/link"
import {lato} from './font'

const logo = () => {
  return (
    <div>
      <Link href={"/"} className={`${lato.className} text-xl md:text-2xl text-black font-black`}> MINTHU</Link>
    </div>
  )
}

export default logo



