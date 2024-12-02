import React from 'react'
import "./App.css"
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import Header from './components/Header/Header'
import Product from './pages/Product'



const App = () => {
  return (
    <>
    <Header/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/product/:id' element={<Product/>}/>
 
    </Routes>
    </>
  )
}

export default App