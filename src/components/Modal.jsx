import React from 'react'

const Modal = ({children}) => {
  return (
    <>
    <div className='bg-[rgba(0,0,0,0.6)]  fixed w-[100vw] h-[100vh]'/>   
    <dialog open className='block m-auto border-none  rounded-2xl mt-[15%]'>
    {children}
    </dialog>
    </>
      
    
  )
}

export default Modal
