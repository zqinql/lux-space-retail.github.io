import './assets/app.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import Details from './page/Details'
import Cart from './page/Cart'
import Congratulation from './page/Congratulation'
import NoteFound from './page/NoteFound'

const App = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/categories/:idc' element={<Details/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/congratulation' element={<Congratulation/>} />
        <Route path='*' element={<NoteFound/>} />
     </Routes>
    </div>
  )
}

export default App
