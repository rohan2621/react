import React from 'react'

const Post = ({author,description}) => {
  return (
    <div className='w-[20vw] font-mono h-32 bg-zinc-600 flex flex-col pt-3 pl-3 rounded-xl'>
      <p className='font-semibold text-lg'>{author}</p>
      <p className='mt-2 '>{description}</p>
      
    </div>
  )
}

export default Post