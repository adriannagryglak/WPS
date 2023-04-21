import * as React from "react"
import { Link } from "gatsby"
import "../styles/pages/subpage.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import video from "../assets/hero-video.mp4"

const ThirdPage = () => (
  <Layout>
  <header className="subpage-header">
    <video muted autoPlay loop loading="eager" className="hero-video">
        <source src={video} type="video/mp4" />
    </video>
  </header>
  <section className="content container">
    <h1>centrale IP PBX</h1>
    <p>Więcej treści wkrótce</p>
    <Link to="/">powrót</Link>
  </section>
</Layout>
)

export const Head = () => <Seo title="Centrale IP BPX" />

export default ThirdPage
