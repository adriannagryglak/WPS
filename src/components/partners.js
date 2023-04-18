import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { StaticImage } from "gatsby-plugin-image"
import "./partners.scss"
import { Pagination } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import { useMediaQuery } from 'react-responsive'

export default function Partners() {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  return (
    <section className="partners container">
      <h1>Serdecznie dziękujemy wszystkim firmom, które zaufały nam do tej pory!
      </h1>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="swiper-item">
          <StaticImage
            src="../images/logos/asterisk.png"
            loading="lazy"
            placeholder="blurred"
            className="item-img"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <StaticImage
            src="../images/logos/cisco.png"
            loading="lazy"
            placeholder="blurred"
            className="item-img"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <StaticImage
            src="../images/logos/dinstar.png"
            loading="lazy"
            placeholder="blurred"
            className="item-img"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <StaticImage
            src="../images/logos/konftel.png"
            loading="lazy"
            placeholder="blurred"
            className="item-img"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <StaticImage
            src="../images/logos/plantronics.png"
            loading="lazy"
            placeholder="blurred"
            className="item-img"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <StaticImage
            src="../images/logos/yealink.png"
            loading="lazy"
            placeholder="blurred"
            className="item-img"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <StaticImage
            src="../images/logos/yeastar.png"
            loading="lazy"
            placeholder="blurred"
            className="item-img"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
