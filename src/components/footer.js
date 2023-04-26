import React from 'react'
import "./footer.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {

    const isMobileLayout = useMediaQuery({ query: '(max-width: 900px)' });
  return (
    <footer className='container'>
        <div className='footer-logo__container'>
            <Link to="/">
            <div className='footer-logo'>
                <StaticImage
                src="../images/logogold.png"
                loading="eager"
                placeholder="blurred"
                className="footer-logo__img"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                />
                <span>POLTEL</span>
            </div>
            </Link>
            {!isMobileLayout && <ul className='footer-data'>
                <li>KRS: 0000422976  NIP: 836-185-66-08</li>
                <li>Przedsiębiorca Telekomunikacyjny: 10130</li> 
            </ul>}
        </div>
        <ul className='footer-links'>
            <li><Link to="/faq" activeClassName='active'>FAQ</Link></li>
            <li><Link to="/serws" activeClassName='active'>Serwis</Link></li>
            <li><Link to="/slownik-tematyczny" activeClassName='active'>Słownik tematyczny</Link></li>
            <li><Link to="/polityka-prywatnosci" activeClassName='active'>Polityka prywatności</Link></li>
            <li><a>Regulamin</a></li>
        </ul>
        <ul className='footer-contact-data'>
            <li className='data-container'>
            <FontAwesomeIcon icon={faPhone} className='footer-icon'/>
                <ul>
                    <li><a href='tel:7177776610'>biuro 71 7777 66 10</a></li>
                    <li><a href='tel:7177776600'>serwis 71 777 66 00</a></li>
                    <li><a href='tel:7177776616'>sklep 71 777 66 16</a></li>
                </ul>
            </li>
            <li className={isMobileLayout ? 'data-container mobile-layout' : 'data-container'}>
            {!isMobileLayout && <FontAwesomeIcon icon={faLocationDot} className='footer-icon'/>}
                    <ul>
                        <li>POLTEL Sp k.  Sp z o.o.</li>
                        <li>ul. Sportowa 20</li>
                        <li>56-120 Brzeg Dolny</li>
                    </ul> 
            </li>
        </ul>
        {isMobileLayout && <ul className='footer-data mobile-layout'>
                <li>KRS: 0000422976</li>
                <li>NIP:  836-185-66-08</li>
                <li>Przedsiębiorca Telekomunikacyjny: 10130</li> 
            </ul>}
  </footer>
  )
}
