import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Navbar(props) {

  return (
    <nav className='navbar '>
        <div>
            <StaticImage
                src="../images/logo-gold.png"
                loading="eager"
                placeholder="blurred"
                className="logo"
                quality={95}
                objectFit={'contain'}
                formats={["auto", "webp", "avif"]}
                alt="złote logo, auto dostawcze otoczone okręgiem"
                />
            <ul>
                <li><Link>oferta</Link></li>
                <li><AnchorLink></AnchorLink>kontakt</li>
                <li><AnchorLink></AnchorLink>o nas</li>
            </ul>
        </div>
        
        <div onClick={()=>{
            props.handleClick();
        }} className='login-call' >
            <span style={{opacity: props.isLoging ? 0 : 1}}>logowanie</span>
            <span style={{opacity: props.isLoging ? 1 : 0}}>powrót</span>
        </div>
    </nav>
  )
}
