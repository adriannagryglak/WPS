import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const FifthPage = () => (
  <Layout>
    <h1>telekonferencje</h1>
    <p>Welcome to page 5</p>
    <Link to="/">POLTEL na strone głowna</Link>
  </Layout>
)

export const Head = () => <Seo title="Telekonferecje" />

export default FifthPage
