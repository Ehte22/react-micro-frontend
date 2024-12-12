import React, { Suspense, useEffect } from 'react'
import './index.css'
import { LOAD_AUTH_API, LOAD_PRODUCT_API } from './redux/store'

import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './pages/Layout'
import Protected from './components/Protected'
import DashBoard from './pages/DashBoard'
import NotFound from './pages/NotFound'

const Auth = React.lazy(() => import("auth/App"))
const Product = React.lazy(() => import("product/App"))

const App = () => {
  const location = useLocation()

  useEffect(() => {
    LOAD_AUTH_API()

    if (location.pathname.startsWith('/product')) {
      LOAD_PRODUCT_API()
    }
  }, [location.pathname])

  return <>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Protected compo={<DashBoard />} />} />
        <Route
          path='/product/*'
          element={
            <Suspense
              fallback={<div>Loading...</div>}> <Protected compo={<Product />} />
            </Suspense>
          }
        />
      </Route>
      <Route
        path='/auth/*'
        element={
          <Suspense
            fallback={<div>Loading...</div>}> <Auth />
          </Suspense>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default App
