import React from 'react'
import { useState } from 'react'

const PostForm = (props) => {



    
  return (
    <>
    <form action="" className='bg-zinc-800 font-mono w-[25vw]  text-white py-13 px-6 flex flex-col rounded-lg gap-4'>
        <p className='flex flex-col gap-2'>
        <label htmlFor="body" className='font-semibold' >Text</label>
        
        <textarea className='bg-zinc-500 px-1.5 py-2 rounded-lg text-white' name='text' placeholder='Something Here'  onChange={props.handleChange} id="body" rows={3}/>
        </p> 
        <p className='flex flex-col gap-2'>
        <label htmlFor="name" className='font-semibold'>Your Name</label>
        <input  className=' px-1.5 py-2 rounded-lg bg-zinc-500' type="text" name='name' onChange={props.handleChange}  placeholder='Enter your name' id="name" />

        </p>
    </form>
    </>
  )
}

export default PostForm
