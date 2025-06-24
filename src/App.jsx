import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './components/Post'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main className='bg-zinc-900 min-h-screen text-white'>
      <Navbar/>

   <Post author="zack" description="this is a first post" />
   <Post author="king" description="this is a second post" />
    </main>

    </>
  )
}

export default App
