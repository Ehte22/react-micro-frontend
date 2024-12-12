import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const App = () => {

  return <>
    <h1>Layout App</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, eius?</p>
  </>
}
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)