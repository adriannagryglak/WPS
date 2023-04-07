import React from 'react'
import Slider from "infinite-react-carousel"
import video from "../assets/hero-video.mp4"
import "./carousel.scss";

export default function Carousel() {

  const [indexesShouldPlay, setIndexesShouldPlay] = React.useState([0]);

  return (
    <Slider adaptiveHeight={true} dots arrows={false} className="carousel-container" 
      beforeChange={i =>{
          console.log('ruszam elementem o indexie', i)
      }}>
    <div className="item">
      <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <h2>autorskie rozwiązanie telefonii voip</h2>
    </div>
    <div className="item">
    <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <h2>2</h2>
    </div>
    <div className="item">
    <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <h2>3</h2>
    </div>
    <div className="item">
    <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <h2>4</h2>
    </div>
  </Slider>
  )
}
