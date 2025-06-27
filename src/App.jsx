import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './components/Post'
import Navbar from './components/Navbar'
import PostForm from './components/PostForm'
import Modal from './components/Modal'
function App() {
  const [isModalvis, setIsModalvis] = useState(false)
  const [posts, setPosts] = useState([])
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
const handleVisi = () => {
  setIsModalvis(false)
  
}
const openModal =() => {
  setIsModalvis(true)
}

const handsubmit = (e) => {
  
  e.preventDefault();
  const { name, value } = e.target;
  setStateData((prevdata)=>({
    ...prevdata,
    [name]:value
  }))
  handleVisi();
  setPosts((prepost)=>[stateData,...prepost])
 fetch('http://localhost:8080/',{method:'POST',body:JSON.stringify(stateData),headers:{
    "Content-type":"application/json"
  }})
}
  

  return (
    <>
    <main className='bg-zinc-900 min-h-screen text-white'>
      {isModalvis===true ?(<Modal onChange={handleVisi}>

<PostForm handleSubmit={handsubmit}  handleChange={Handleform} />

</Modal>):null}
      <Navbar handleOpen={openModal}/>
   
<div className='flex gap-6 mt-4 ml-9' >

 {posts.map((e) =><Post  author={e.name} description={e.text }/> )}
 
</div>
    </main>

    </>
  )
}

export default App
