import * as React from "react"
import "../styles/index.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <section className="not-found container">
      <div>
        <h1>404</h1>
        <h2>Podany adres niestety nie istnieje</h2>
        <Link to="/">powrot na start</Link>
      </div>
    </section>
    
  </Layout>
)

export const Head = () => <Seo title="Nieznany adres" />

export default NotFoundPage
