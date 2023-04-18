import * as React from "react"
import { Link } from "gatsby"
import video from "../assets/hero-video.mp4"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <section className="hero-video">
      <video muted autoPlay loop loading="eager">
          <source src={video} type="video/mp4" />
      </video>
    </section>
    <h1>abonament bez limitu</h1>
    <p>Welcome to page 2</p>
    <Link to="/">POLTEL na strone głowna</Link>
  </Layout>
)

export const Head = () => <Seo title="Abonament bez limitu" />

export default SecondPage
