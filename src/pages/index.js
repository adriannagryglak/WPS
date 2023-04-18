import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.scss"
import Header from "../components/header"
import Intro from "../components/intro"
import Offer from "../components/offer"
import Partners from "../components/partners"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
      <Header />
      <Intro />
      <Offer />
      <Partners/>
      <Contact/>
      {/* <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <div key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </div>
        ))}
        <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p> */}

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />

export default IndexPage
