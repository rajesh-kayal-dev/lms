import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/common/Layout'
import AppRoutes from './routes/AppRoutes'
import Hero from './components/common/Hero'

const App = () => {
  return (
    <BrowserRouter>

      <AppRoutes />
    </BrowserRouter>
  )
}

export default App