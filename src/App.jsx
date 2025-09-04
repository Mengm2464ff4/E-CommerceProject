import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Product from './components/Product'

const App = () => {

  return (
    <>
    <Navbar />
     <Home />
     <Product />
    </>
  )
}

export default App
