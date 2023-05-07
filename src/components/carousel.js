import React from 'react'
import Slider from "infinite-react-carousel"
import video from "../assets/hero-video.mp4"
import video2 from "../assets/hero-video-2.mp4"
import video3 from "../assets/hero-video-3.mp4"
import video4 from "../assets/hero-video-4.mp4"
import "./carousel.scss";

export default function Carousel() {

  return (
    <Slider adaptiveHeight={true} dots arrows={false} className="carousel-container" >
    <div className="item">
      <video muted autoPlay loop loading="eager">
        <source src={video4} type="video/mp4" />
      </video>

    </div>
    <div className="item">
    <video muted autoPlay loop>
        <source src={video3} type="video/mp4" />
      </video>
      
    </div>
    <div className="item">
    <video muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <h2>3</h2>
    </div>
    <div className="item">
    <video muted autoPlay loop>
        <source src={video2} type="video/mp4" />
      </video>
      
    </div>
  </Slider>
  )
}
