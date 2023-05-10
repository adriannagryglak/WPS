import * as React from "react"
import Navbar from "./navbar"
import Login from "../components/login"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useScroll, animated } from "react-spring";

export default function Header() {
  const [isLoging, setIsLoging] = React.useState(false);
  const [scrollVal, setScrollVal] = React.useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(scrollYProgress + 1);
    }
  });

  isLoging ? disableBodyScroll(document) : enableBodyScroll(document);
  
  return (
    <header className={isLoging  ? "header out" : "header "}>
      <animated.div className="circle" style={{transform: `translate(${scrollVal*30}%,${scrollVal*40}%) rotate(${scrollVal*40}deg)`}}></animated.div>
      <div className="container">
        <Login />
        <Navbar isLoging={isLoging} handleClick={()=>{setIsLoging(prev=>!prev)}}/>
        <h1>Potrzebujesz coś przyczepić?</h1>
        <h2>jesteś w dobrym miejscu.</h2>
        <div className="gold-stripe"></div>
      </div>
      <div className="fancy">


      </div>
    </header>
  )
}
