import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Skills from './pages/Skills'
import Education from './pages/Education'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/educacao' element={<Education />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
