import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo';
import "../styles/pages/call-center.scss"

export default function clientPage() {

return(
  <Layout>
    <section className='double-content-subpage container'>
      <div style={{minHeight:"50vh", position: "relative"}}>WIĘCEJ WKRÓTCE</div>
    </section>
  </Layout>
)
}

export const Head = () => <Seo title="Klient indywidualny" />
