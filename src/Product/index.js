import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Product from './Pages/Product'
import './App.css'
import Login from './Login/Login'
import About from './Pages/About/About'
export const Index = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/products' element={<Product />} />
          <Route path='/about' element={<About />} />

        </Routes>
        <Login/>
      </Router>
    </div>
  )
}
export default Index