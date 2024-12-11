import React from 'react'

import './index.css'
import { Outlet, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Test from './pages/Test'

const App = () => {

  return <>
    <Routes>
      <Route path='/' element={<Outlet />} />
      <Route index element={<Login />} />
      <Route path='/sign-up' element={<Register />} />
      <Route path='/test' element={<Test />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default App


