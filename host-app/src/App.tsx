import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import reduxStore from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Auth = React.lazy(() => import("auth/App"))
const Product = React.lazy(() => import("product/App"))


import NotFound from './pages/NotFound'
import Layout from './pages/Layout'
import DashBoard from './pages/DashBoard'
import Protected from './components/Protected'

const App = () => {

  return <>
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Protected compo={<DashBoard />} />} />
          <Route path='/product/*' element={<Suspense> <Protected compo={<Product />} /> </Suspense>} />
        </Route >
        <Route path='/auth/*' element={<Suspense> <Auth /></Suspense>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
}

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>

)