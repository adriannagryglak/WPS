import * as React from "react"
import { Link } from "gatsby"
import "./sidebar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { useScrollIndicator } from 'react-use-scroll-indicator';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useMediaQuery } from 'react-responsive'

export default function Sidebar(){

    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [state] = useScrollIndicator();
    const [isOpen, setIsOpen] = React.useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });

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
                <ul >
                    <li><Link to="/o-nas">o nas</Link></li>
                    <li><a href="http://sklep.e-poltel.pl/">sklep</a></li>
                    <li><AnchorLink to="/#kontakt" stripHash>kontakt</AnchorLink></li>
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
                            <li className="mobile-only"><Link to="/abonament-bez-limitu" activeClassName="active-link" >abonament bez limitu</Link></li>
                            <li className="mobile-only"><Link to="/centrale-ip-box" activeClassName="active-link" >centrale ip pbx</Link></li>
                            <li className="mobile-only"><Link to="/nagrywanie-rozmow" activeClassName="active-link" >nagrywanie rozmów</Link></li>
                            <li className="mobile-only"><Link to="/telekonferencje" activeClassName="active-link" >telekonferencje</Link></li>
                        
                            <li><Link className="offer-item" activeClassName="active-link" to="/klient-indywidualny">klient indywidualny</Link></li>
                            <li><Link className="offer-item" activeClassName="active-link" to="/klient-biznesowy">klient biznesowy</Link></li>
                            <li><Link className="offer-item" activeClassName="active-link" to="/urzedy-i-instytucje">urzędy i instytucje</Link></li>
                        </ul>
                    </li>
                    <li><ul className="sidebar-menu__icons">
                    
                    <FontAwesomeIcon icon={faPhone} className='icon'/>

                    <a href="https://www.facebook.com/voippoltel/">
                    <FontAwesomeIcon className="icon" icon={faFacebookF} />
                    </a>
                    <a href="mailto:biuro@e-poltel.pl">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    </a>
                </ul></li>
                </ul>
                {isOpen && <div className="custom-cursor" style={!isMobile ? { left: `${mousePosition.x}px`, top: `${mousePosition.y}px` } : {left: "20px", top: "10px"}}></div>}
                
            </div>
        </div>
        </>
        
    );
}