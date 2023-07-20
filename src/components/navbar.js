import { StaticImage } from 'gatsby-plugin-image'
import React, {useContext}from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import {Sling as Hamburger} from 'hamburger-react'
import { CustomCursorContext } from './customCursorContext'

export default function Navbar(props) {

    const [isHamburgerOpen, setHamburgerOpen] = React.useState(false);
    const { setType } = useContext(CustomCursorContext);
  return (
    <nav className="navbar container">
        <div className='navbar__mobile'>
            <Hamburger rounded size={28} color="#f5f5f5" label="pokaż menu" toggled={isHamburgerOpen} toggle={setHamburgerOpen} />
        </div>
        
        <div className='navbar__desktop'>
            <div onMouseEnter={()=>{setType('hovered')}} onMouseLeave={()=>{setType('default')}}>
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
            </div>
            
            <ul>
                <li onMouseEnter={()=>{setType('hovered')}} onMouseLeave={()=>{setType('default')}}><Link>wynajem przyczep</Link></li>
                <li onMouseEnter={()=>{setType('hovered')}} onMouseLeave={()=>{setType('default')}}><Link>holowanie pojazdów</Link></li>
                <li onMouseEnter={()=>{setType('hovered')}} onMouseLeave={()=>{setType('default')}}><Link>auta zastępcze</Link></li>
                <li onMouseEnter={()=>{setType('hovered')}} onMouseLeave={()=>{setType('default')}}><AnchorLink></AnchorLink>kontakt</li>
                <li onMouseEnter={()=>{setType('hovered')}} onMouseLeave={()=>{setType('default')}}><AnchorLink></AnchorLink>o nas</li>
            </ul>
        </div>
        
        <div onClick={()=>{
            props.handleLoging();
            
        }} className='login-call' >
            <span style={{opacity: props.isLoging ? 0 : 1}}>logowanie</span>
            <span style={{opacity: props.isLoging ? 1 : 0}}>powrót</span>
        </div>
    </nav>
  )
}
