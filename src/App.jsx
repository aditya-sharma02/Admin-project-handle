import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Project from './Project'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  )
}

export default App
