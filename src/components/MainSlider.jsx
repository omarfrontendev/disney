import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainSlider = () => {

  const images = [
    {
      id: 1,
      img: '/assets/slider-badag.jpg'
    },
    {
      id: 2,
      img: '/assets/slider-badging.jpg'
    },
    {
      id: 3,
      img: '/assets/slider-scale.jpg'
    },
    {
      id: 4,
      img: '/assets/slider-scales.jpg'
    },
  ]

  return (
    <div className='main_slider container'>
      <Swiper 
        slidesPerView={1}
        breakpoints={{
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerGroup={1}
        loopFillGroupWithBlank={true}
        loop={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true} 
        modules={[Navigation, Pagination, Autoplay]} 
        className="mySwiper"
      >
      {images.map(img => (
        <SwiperSlide key={img.id}>
          <div className='img_container'>
            <img src={img.img} alt="" />
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}

export default MainSlider