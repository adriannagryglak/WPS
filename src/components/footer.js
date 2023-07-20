import React from 'react'

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

  return (
    <footer className='footer container'>
      <div className='lists-container'>
      <Link to="/" className='logo-home-link'><StaticImage
                src="../images/logo-gold.png"
                loading="eager"
                placeholder="blurred"
                className="logo"
                quality={95}
                objectFit={'contain'}
                formats={["auto", "webp", "avif"]}
                alt="złote logo, auto dostawcze otoczone okręgiem"
                /></Link>
        <ul>
          <li>o nas</li>
          <li>kontakt</li>
          <li>regulamin</li>
          <li>polityka prywatności</li>
        </ul>
        <ul>
          <li>lawety</li>
          <li>busy</li>
          <li>autolawety</li>
          <li>zwyżki</li>
        </ul>
        <ul>
          <li>moje konto</li>
          <li>przyczepmnie@kontakt.pl</li>
          <li>+48 124 665 775</li>
          <li>ul. nazwa ulicy 123</li>
          <li>Zgorzelec</li>
        </ul>
      </div>
      <div className='footer-stripe'></div>
      <ul className='icons-lists'>
          <li><FontAwesomeIcon icon={faPhone}/></li>
          <li><FontAwesomeIcon icon={faLocationDot}/></li>
          <li><FontAwesomeIcon icon={faPhone}/></li>
          <li><FontAwesomeIcon icon={faLocationDot}/></li>
        </ul>
      <span className='created-by'>created by STUDIO STRON</span>
  </footer>
  )
}
