import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
     
    <h1>centrale ip bpx</h1>
    <p>Welcome to page 3</p>
    <Link to="/">POLTEL na strone głowna</Link>
  </Layout>
)

export const Head = () => <Seo title="Centrale IP BPX" />

export default ThirdPage
