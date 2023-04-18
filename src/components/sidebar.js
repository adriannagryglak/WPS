import * as React from "react"
import { Link } from "gatsby"
import "./sidebar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useScrollIndicator } from 'react-use-scroll-indicator';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image"

export default function Sidebar(){

    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [state] = useScrollIndicator();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState(false);


    React.useEffect(() => {
        const mouseMoveHandler = (event) => {
          const { clientX, clientY } = event;
          setMousePosition({ x: clientX, y: clientY });
        };
        if(isOpen){
            document.addEventListener("mousemove", mouseMoveHandler);
        }
    
        return () => {
          document.removeEventListener("mousemove", mouseMoveHandler);
        };
      }, [isOpen])

    return(
        <>
        
        <div className="sidebar">
            
            <div className="hamburger" onClick={()=>{setIsOpen(true)}}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="scroll-container">
               <div className="scrollbar">
               <div className="scrollbar-indicator" style={{height: `${state.value}%`}}></div>
               </div>
            </div>
            <div className="icons-container">
                <a href="https://www.facebook.com/voippoltel/">
                    <FontAwesomeIcon className="sm-icon" icon={faFacebookF} />
                </a>
                <a href="mailto:biuro@e-poltel.pl">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>

            <div className={isOpen ? "sidebar-menu open" : "sidebar-menu"} onClick={()=>{setIsOpen(false)}}>
            {isOpen && <div className={isHovered ? "custom-cursor scale-down" : "custom-cursor"} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>}
       
                <ul onMouseEnter={()=>{setIsHovered(true)}} onMouseOver={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} >
                    <li><Link to="/o-nas">o nas</Link></li>
                    <li><Link to="/sklep">sklep</Link></li>
                    <li><AnchorLink to="/#contact" stripHash>kontakt</AnchorLink></li>
                    <li>
                        współpraca
                        <ul>
                            <li><Link className="offer-item" to="/handlowcy">handlowcy</Link></li>
                            <li><Link className="offer-item" to="/informatycy">informatycy</Link></li>
                            <li><Link className="offer-item" to="/serwisanci-centrali">serwisanci centrali</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/faq">faq</Link></li>
                    <li>
                        oferta
                        <ul>
                            <li><Link className="offer-item" to="/klient-indywidualny">klient indywidualny</Link></li>
                            <li><Link className="offer-item" to="/klient-biznesowy">klient biznesowy</Link></li>
                            <li><Link className="offer-item" to="/urzedy-i-instytucje">urzędy i instytucje</Link></li>
                        </ul>
                    </li>
                    <li><ul className="sidebar-menu__icons">
                    {/* <div className="sidebar-menu__logo">
                        <StaticImage
                        src="../images/logogold.png"
                        loading="eager"
                        placeholder="blurred"
                        className="logo__img"
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                        />
                        <span>POLTEL</span>
                    </div> */}
                    
                    <FontAwesomeIcon icon={faPhone} className='icon'/>
                    {/* <ul>
                        <li><a href='tel:7177776610'>biuro 71 7777 66 10</a></li>
                        <li><a href='tel:7177776600'>serwis 71 777 66 00</a></li>
                        <li><a href='tel:7177776616'>sklep 71 777 66 16</a></li>
                    </ul> */}
                    <a href="https://www.facebook.com/voippoltel/">
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                    </a>
                    <a href="mailto:biuro@e-poltel.pl">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    </a>
                </ul></li>
                </ul>
                
                
            </div>
        </div>
        </>
        
    );
}