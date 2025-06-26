import React from 'react'

const Modal = ({children,onChange}) => {
  return (
    <>
    <div className='bg-[rgba(0,0,0,0.6)]  fixed w-[100vw] h-[100vh]' onClick={onChange} />   
    <dialog open className='block m-auto border-none  rounded-2xl mt-[15%]'>
    {children}
    </dialog>
    </>
      
    
  )
}

export default Modal
