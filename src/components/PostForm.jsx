import React from 'react'
import { useState } from 'react'

const PostForm = () => {
const [stateData, setStateData] = useState('')
const handleChange =(e) => {
    setStateData(e.target.value)
  
}

    
  return (
    <>
    <form action="" className='bg-zinc-800 font-mono w-[20vw] mx-auto py-8 px-3 flex flex-col rounded-lg mt-8 mb-10 gap-4'>
        <p className='flex flex-col gap-2'>
        <label htmlFor="body" className='font-semibold' >Text</label>
        
        <textarea className='bg-zinc-500 px-1.5 py-2 rounded-lg text-white' placeholder='Something Here'value={stateData} onChange={handleChange} id="body" rows={3}/>
        </p> 
        <p className='flex flex-col gap-2'>
        <label htmlFor="name" className='font-semibold'>Your Name</label>
        <input  className=' px-1.5 py-2 rounded-lg bg-zinc-500' type="text"  placeholder='Enter your name' id="name" />

        </p>
    </form>
    </>
  )
}

export default PostForm
