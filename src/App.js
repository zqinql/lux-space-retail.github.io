import './assets/app.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import Details from './page/Details'

const App = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='categories/:idc' element={<Details/>} />
        <Route path='categories/:idc' element={<Details/>} />
        

     </Routes>
    </div>
  )
}

export default App
