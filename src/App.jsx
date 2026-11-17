import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import HomePage from './pages/HomePage'
import Cart from './pages/Cart'
import Mainlayout from './components/layout/Mainlayout'

function App() {
  return (
    <BrowserRouter>
     <Routes>

      <Route path='/' element={<Mainlayout/>}>

        {/* productPage */}
        <Route path='/products' element={<Products/>}/>
        {/* Homepage */}
        <Route path='/' element={<HomePage/>}/>
       

      </Route>

       {/* cartpage */}
        <Route path='/cart' element={<Cart/>}/>

     </Routes>
    </BrowserRouter>
  )
}

export default App
