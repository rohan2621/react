import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './components/Post'
import Navbar from './components/Navbar'
import PostForm from './components/PostForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='bg-zinc-900 min-h-screen text-white'>
      <Navbar/>
      <div>

<PostForm/>
      </div>
<div className='flex gap-6 mt-4 ml-9' >
   <Post author="Zack" description="This is a first post" />
   <Post author="King" description="This is a second post" />
</div>
    </main>

    </>
  )
}

export default App
