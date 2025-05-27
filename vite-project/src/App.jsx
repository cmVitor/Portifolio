import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/educacao' element={<Education />}></Route>
        <Route path='/experiencias' element={<Experience />}></Route>
        <Route path='/projetos' element={<Projects />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
