import React from 'react';
import NavLink from './navLink';

interface OverlayMenuProps {
  links: {path:string ; title :string} []
}

const OverlayMenu :React.FC<OverlayMenuProps> = ({links}) => {
  return (
    <div className='z-10 flex items-center justify-center'>
      <ul className=' absolute p-7 top-16  w-[280px] flex flex-col gap-4 items-center justify-center md:hidden bg-blue-300 z-10'>
        {links.map((link, index) => (
          <li key={index} className=' w-[250px] marker:font-bold text-white bg-transparent hover:bg-gray-500 border border-black text-center rounded-md'>
            <NavLink href={link.path} title={link.title}  />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayMenu;
