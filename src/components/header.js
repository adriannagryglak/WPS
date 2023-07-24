import * as React from "react"
import { useScroll, animated, useTransition } from "react-spring";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode} from "swiper";
import { StaticImage } from "gatsby-plugin-image";
import "swiper/css";
import "swiper/css/free-mode";
import { CustomCursorContext } from './customCursorContext'

export default function Header({isLoging}) {

  const { setType } = React.useContext(CustomCursorContext);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [scrollVal, setScrollVal] = React.useState(1);
  const names = [ "przyczepy", "a może bus ?", "lawety",];

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setScrollVal(scrollYProgress);
    }
  });


  const transition = useTransition(activeSlide, {
    from: { height: 0},
    enter: { opacity: 1, height: 100},
    leave: { height: 0},
  });


  return (
    <header className={isLoging  ? "header " : "header "}>
      <animated.div className="circle" style={{transform: `translate(${120 - scrollVal*350}%,${-80 + scrollVal*590}%) rotate(${scrollVal*360 -180}deg)`, 
          gap: `${scrollVal * 20}px`}}></animated.div>
      <div className="container">
        <h1>Potrzebujesz coś przyczepić?</h1>
        <h2>jesteś w dobrym miejscu.</h2>
        <div className="gold-stripe" ></div>
      </div>
      <div className="fancy container">
        <div className="swiper-container" onMouseEnter={()=>{setType('slider')}} onMouseLeave={()=>{setType('default')}}>
        {transition((style, item)=>{
            return (<>
            <animated.span style={style} className="up">{names[(item -1 + names.length) % names.length] }</animated.span>
              <animated.span style={style} className="active">{names[item]}</animated.span>
              <animated.span style={style} className="down">{names[(item +1 + names.length) % names.length]}</animated.span>
            </>
              
              )
          })}
     
       <Swiper
            loop={true}
            speed={1000}
            
            direction={"vertical"}
            mousewheel={true}
            modules={[FreeMode, Mousewheel]}
            className="swiper"
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      
          >
            <SwiperSlide className="slide" >
          
                  <StaticImage
                    src="../images/laweta.jpg"
                    loading="eager"
                    placeholder="blurred"
                    className="item-image"
                    quality={95}
                    objectFit={'cover'}
                    backgr
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    />
                        
                    
            </SwiperSlide>
            <SwiperSlide className="slide">
                  
                  <StaticImage
                    src="../images/laweta.jpg"
                    loading="eager"
                    placeholder="blurred"
                    className="item-image"
                    quality={95}
                    objectFit={'cover'}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    />
                          
                    
            </SwiperSlide>
            <SwiperSlide className="slide">
                  
                  <StaticImage
                    src="../images/laweta.jpg"
                    loading="eager"
                    placeholder="blurred"
                    className="item-image"
                    quality={95}
                    objectFit={'cover'}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                    />
                    
            </SwiperSlide>

          </Swiper>
          
        </div>
      </div>
    </header>
  )
}
