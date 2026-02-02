import React from 'react'
import Headers from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Headers/>
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout
