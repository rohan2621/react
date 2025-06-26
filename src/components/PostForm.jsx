import React from 'react'
import { useState } from 'react'

const PostForm = (props) => {



    
  return (
    <>
    <form onSubmit={props.handleSubmit} className='bg-zinc-800 font-mono w-[25vw]  text-white py-13 px-6 flex flex-col rounded-lg gap-4'>
        <p className='flex flex-col gap-2'>
        <label htmlFor="body" className='font-semibold' >Text</label>
        
        <textarea className='bg-zinc-500 px-1.5 py-2 rounded-lg text-white' name='text' placeholder='Something Here'  onChange={props.handleChange} id="body" rows={3}/>
        </p> 
        <p className='flex flex-col gap-2'>
        <label htmlFor="name" className='font-semibold'>Your Name</label>
        <input  className=' px-1.5 py-2 rounded-lg bg-zinc-500' type="text" name='name' onChange={props.handleChange}  placeholder='Enter your name' id="name" />

        </p>
        <p>

        <button  class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Post</button>
        <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
        </p>
    </form>
    </>
  )
}

export default PostForm
