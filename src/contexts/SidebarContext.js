import React ,{useState, createContext}from 'react';

// create contex


export const  sidebarContext  = createContext()

const SidebarProvider  = ({children})=>{

  // sidebar state

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = ()=>{
    setIsOpen(false)
  }
  return<sidebarContext.Provider  value={{isOpen,setIsOpen,handleClose}}>
    {children}
  </sidebarContext.Provider>
}

export default SidebarProvider;

