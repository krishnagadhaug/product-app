import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddEnp from './components/AddEnp'
import Searchpro from './components/Searchpro'
import Delete from './components/Delete'
import Viewpro from './components/Viewpro'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <AddEnp/>
      <Searchpro/>
      <Delete/>
     <Viewpro/>
              
                
     
    </>
  )
}

export default App
