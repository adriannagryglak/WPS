import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Offer from "../components/offer"


import "../styles/index.scss";

const IndexPage = () => (
  <Layout>
      <Header />
      <Offer />
   
      

  </Layout>
)
export const Head = () => <Seo />

export default IndexPage
