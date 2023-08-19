import React , {useContext} from 'react';
import { sidebarContext } from '../contexts/SidebarContext';
import {BsBag} from 'react-icons/bs'




const Header  = () =>{
  const { isOpen,setIsOpen } = useContext(sidebarContext);
  return(
    <header  className='bg-pink-200'>
      <div>Header</div>

      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'><BsBag className='text-2xl'/></div>
    </header>
  )
}


export default Header;