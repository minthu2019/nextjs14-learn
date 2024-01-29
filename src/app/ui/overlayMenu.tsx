import React from 'react';
import NavLink from './navLink';
import { link } from 'fs';

interface OverlayMenuProps {
  links: {path:string ; title :string} []
}

const OverlayMenu :React.FC<OverlayMenuProps> = ({links}) => {
  return (
    <div className='z-10'>
      <ul className=' absolute top-16  w-full flex flex-col gap-4 items-center md:hidden bg-blue-300 z-10'>
        {links.map((link, index) => (
          <li key={index} className=' marker:font-bold text-white bg-transparent hover:bg-gray-500 border border-black text-center rounded-md'>
            <NavLink href={link.path} title={link.title}  />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayMenu;
