import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
  <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>  
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-0 bg-white px-3 py-2'>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}
    onClick={ () => {setColor("red")}}
    > Red</button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}}
    onClick={ () => {setColor("green")}}
    > Green</button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}}
    onClick={ () => {setColor("blue")}}
    > Blue</button>
    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "lavender"}}
    onClick={ () => {setColor("lavender")}}
    > Lavender</button>
    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "white"}}
    onClick={ () => {setColor("white")}}
    > White</button>
    <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "black"}}
    onClick={ () => {setColor("black")}}
    > Black</button>
    <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor: "pink"}}
    onClick={ () => {setColor("pink")}}
    > Pink</button>
  </div>
</div>

   </div>
    </>
  )
}

export default App
