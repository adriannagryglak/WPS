import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FourthPage = () => (
  <Layout>
    
    <h1>nagrywanie rozmow</h1>
    <p>Welcome to page 4</p>
    <Link to="/">POLTEL na strone głowna</Link>
  </Layout>
)

export const Head = () => <Seo title="Nagrywanie rozmów" />

export default FourthPage
