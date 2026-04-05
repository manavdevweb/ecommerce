import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import CartPage from './pages/cartPage'
import ProductDetails from './pages/productDetails'
import Navbar from './assets/components/Navbar'
import { Provider } from 'react-redux'
import {store} from "./App/Store"; 
//   <>
// <Provider>
// <Provider/>

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/cart' element= {<CartPage/>} />
      <Route path='/product' element= {<ProductDetails/>} />
    </Routes>    
    </BrowserRouter>
  </Provider>
)
}

export default App