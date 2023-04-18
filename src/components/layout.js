/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SideBar from "./sidebar.js"
import "./main.scss"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {

  return (
    <>
        <SideBar />
        <main>
        <Navbar />{children}</main>
        <Footer/>
    </>
  )
}

export default Layout
