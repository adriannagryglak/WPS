import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/pages/regulamin.scss"
import { StaticImage } from 'gatsby-plugin-image'

export default function Policy() {
    return (
        <Layout>
            <section className='regulamin'>
                <h1>Polityka prywatności</h1>
                <h2>oraz plików "cookies"</h2>
                <div className='regulamin-container policy container'>
                        <StaticImage
                            src="../images/rodo.gif"
                            loading="lazy"
                            placeholder="blurred"
                            className="rodo-img"
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                        />
                </div>

            </section>
        </Layout>
      )
    }
    
    export const Head = () => <Seo title="Polityka prywatności" />
