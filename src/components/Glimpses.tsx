
import styled from 'styled-components'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



const Glimpses = () => {
  return (
    <GlimpsesContainer className=' w-full md:w-[80%] lg:w-2/4'>
      <section className='  m-9 flex flex-col gap-3  justify-center text-center'> 
          
          <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="Glimpses">Glimpses</div>
</div>
         
<Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  loop={true}
  modules={[EffectCoverflow, Pagination]}
  className="mySwiper"
>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>

</Swiper>
    
    


        </section>

    </GlimpsesContainer>
  )
}


const GlimpsesContainer= styled.div`
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 200px;
}

.swiper-slide img {
  display: block;
  width: 300px;
  height: 300px;
  object-fit: cover;
}



@media (max-width:450px){
  .swiper-slide{
    width: 300px !important;
  height: 300px;
  }
}

`
export default Glimpses
