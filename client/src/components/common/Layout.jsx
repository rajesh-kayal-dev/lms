import React from 'react'
import Headers from './Header'
import Footer from './Footer'
import TitleManager from './TitleManager'

const Layout = ({children}) => {
  return (
    <>
    <TitleManager/>
    <Headers/>
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout
