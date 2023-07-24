import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Offer from "../components/offer"
import Faq from "../components/faq"
import "../styles/index.scss";
import Contact from "../components/contact"


function IndexPage() {

  const [isLoging, setIsLoging] = React.useState(false);

  return (

    <Layout isLoging={isLoging} handleLoging={()=>{setIsLoging(prev=>!prev)}}>
        <Header isLoging={isLoging}/>
        <Offer />
        <Faq />
        <Contact />
      </Layout>

 )
}
export const Head = () => <Seo />

export default IndexPage
