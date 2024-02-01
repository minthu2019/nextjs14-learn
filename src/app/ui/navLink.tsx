
import Link from 'next/link'

const navLink = ({href , title   }:{href:string; title:string }) => {
  return (
    <>
      <Link href={href} className={` text-lg font-medium text-black hover:text-white z-10`}>
          <p className='w-[250px] md:w-auto md:p-0 p-4'>{title}</p>
      </Link>
    </>  )
}

export default navLink
