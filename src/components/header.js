import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.scss"
import Carousel from "./carousel.js"
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

export default function Header() {
  const [readMoreOn, setReadMoreOn]= useState(true);
  const isMobileBox = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <header className="header">
      <div className="header-container">
        <Carousel />
        <div className="header-caption-container">
          <div className="header-caption">
            <h2>Obniżamy koszty połączeń!</h2>
            <StaticImage
              src="../images/phone.png"
              loading="eager"
              placeholder="blurred"
              className="phone-img"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <p className="paragraph__first">
              Nasza oferta skierowana jest do wszystkich, którzy chcą znacząco
              usprawnić działanie swojej firmy oraz obniżyć koszty
              telekomunikacji. Połączenia wykonywane w naszej sieci są darmowe,
              dlatego jest ona idealnym rozwiązaniem dla firm i instytucji
              posiadających rozproszone oddziały.
              </p>
              {!readMoreOn && isMobileBox ? <>
                <p className="paragraph__second"><br/>
              Dzięki zastosowaniu najnowszych rozwiązań z dziedziny
              telekomunikacji oraz informatyki, możemy zaoferować najwyższą
              jakość usług. Naszą zaletą jest bardzo duża elastyczność w
              zakresie ich konfiguracji.
            </p>
            <h3>Dobór oferty na korzyść klienta </h3>
            <p className="paragraph__third">
              Indywidualna oferta cenowa zależna
              od generowanego ruchu (stawki minutowe).             
              <br />
              <br /> Nielimitowane połączenia
              stacjonarne i komórkowe do wszystkich sieci (ryczałt). 
              <br />
              <br /> = 20 – 50%
              niższe rachunki względem aktualnej FV
            </p></> : readMoreOn && isMobileBox ? <></> : <>
            <p className="paragraph__second">
              Dzięki zastosowaniu najnowszych rozwiązań z dziedziny
              telekomunikacji oraz informatyki, możemy zaoferować najwyższą
              jakość usług. Naszą zaletą jest bardzo duża elastyczność w
              zakresie ich konfiguracji.
            </p>
            <h3>Dobór oferty na korzyść klienta </h3>
            <p className="paragraph__third">
              Indywidualna oferta cenowa zależna
              od generowanego ruchu (stawki minutowe).             
              <br />
              <br /> Nielimitowane połączenia
              stacjonarne i komórkowe do wszystkich sieci (ryczałt). 
              <br />
              <br /> = 20 – 50%
              niższe rachunki względem aktualnej FV
            </p>
            </>}
              {isMobileBox && <a className={!readMoreOn ? "read-more" : ""} onClick={()=>{setReadMoreOn(!readMoreOn)}}>{readMoreOn ? " czytaj więcej..." : " czytaj mniej..."}</a>}
          </div>
        </div>
      </div>
    </header>
  )
}
