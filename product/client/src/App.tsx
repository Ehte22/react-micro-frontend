import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import './index.css'
import Product from './pages/Product'
import Test from './pages/Test'
import NotFound from './pages/NotFound'

const App = () => {

  return <>
    <Routes>
      <Route path='/' element={<Outlet />} />
      <Route index element={<Product />} />
      <Route path='/test' element={<Test />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default App

