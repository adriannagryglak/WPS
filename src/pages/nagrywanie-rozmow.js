import * as React from "react"
import { Link } from "gatsby"
import video from "../assets/hero-video.mp4"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/pages/abonament.scss"

const FourthPage = () => (
  <Layout>
      <header className="subpage-header">
        <video muted autoPlay loop loading="eager" className="hero-video">
            <source src={video} type="video/mp4" />
        </video>
      </header>
    <section className="content container">
      <h1>nagrywanie rozmów</h1>
      <p>Więcej treści wkrótce</p>
      <Link to="/">powrót</Link>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Nagrywanie rozmów" />

export default FourthPage
