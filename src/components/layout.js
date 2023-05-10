import * as React from "react"
import Footer from "./footer"


const Layout = ({ children }) => {


  return (
    <>
       <main className="dark-bg">
        
        {children}
       </main>
       <Footer/>
    </>
  )
}

export default Layout
