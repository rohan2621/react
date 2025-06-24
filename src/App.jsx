import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './components/Post'
import Navbar from './components/Navbar'
import PostForm from './components/PostForm'
import Modal from './components/Modal'
function App() {
  
  const [stateData, setStateData] = useState({
      name :"",
      text : ""
})
const Handleform = (e) => {
  const { name, value } = e.target;
  setStateData((prevdata)=>({
    ...prevdata,
    [name]:value
  }))
}


  return (
    <>
    <main className='bg-zinc-900 min-h-screen text-white'>
      <Modal>
<PostForm  handleChange={Handleform} />

</Modal>
      <Navbar/>
   
<div className='flex gap-6 mt-4 ml-9' >
 {stateData.name !== "" || stateData.text !== "" ? (
  <Post author={stateData.name} description={stateData.text} />
) : (
  <div></div>
)}

   <Post author="King" description="This is a second post" />
</div>
    </main>

    </>
  )
}

export default App
