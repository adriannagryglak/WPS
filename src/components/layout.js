import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import Login from "./login";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import CustomCursorManager from './customCursorContext';
import CustomCursor from './customCursor';

function Layout({ children, isLoging, handleLoging }){
  
  isLoging ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <>
  <CustomCursorManager>
    <CustomCursor />

       <main className={isLoging ? "dark-bg out" : "dark-bg"}>
        <Login />
        <Navbar isLoging={isLoging} handleLoging={handleLoging}/>
        {children}
       </main>
       <Footer/>
       </CustomCursorManager>
    </>
  )
}

export default Layout
