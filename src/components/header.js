import * as React from "react"
import { Link } from "gatsby"
import "./header.scss"
import Navbar from "./navbar"
import Carousel from "./carousel.js"


export default function Header(){

  return(
  <header className= "header">
    <div className="header-container">

      <Navbar />
      <Carousel/>
      <div className="header-caption-container">
        <div className="header-caption">
          <h2>Obniżamy koszty połączeń</h2>
          <p>
            Nasza oferta skierowana jest do wszystkich, którzy chcą znacząco
            usprawnić działanie swojej firmy oraz obniżyć koszty
            telekomunikacji. Połączenia wykonywane w naszej sieci są darmowe,
            dlatego jest ona idealnym rozwiązaniem dla firm i instytucji
            posiadających rozproszone oddziały. Dzięki zastosowaniu najnowszych
            rozwiązań z dziedziny telekomunikacji oraz informatyki, możemy
            zaoferować najwyższą jakość usług. Naszą zaletą jest bardzo duża
            elastyczność w zakresie ich konfiguracji.
          </p>
        </div>
      </div>
    </div>
  </header>)
  }

