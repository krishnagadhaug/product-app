import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddEnp from './components/AddEnp'
import Searchpro from './components/Searchpro'
import Delete from './components/Delete'
import Viewpro from './components/Viewpro'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<BrowserRouter>

<Routes>
  <Route path='/'element={<AddEnp/>} />
  <Route path='/search'element={<Searchpro/>} />
  <Route path='/delete'element={<Delete/>} />
  <Route path='/view'element={<Viewpro/>} />
  
</Routes>
</BrowserRouter>


</>
  )
}

export default App
