import * as React from "react"
import { Link } from "gatsby"
import "./sidebar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { useScrollIndicator } from 'react-use-scroll-indicator';

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
            <div className="test"></div>
                <ul onMouseEnter={()=>{setIsHovered(true)}} onMouseOver={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} >
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
        </div>
        </>
        
    );
}