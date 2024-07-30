
import styled from 'styled-components'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';



const Glimpses = () => {
  return (
    <GlimpsesContainer className='relative z-20 top-[40rem] p-2 mt-8 m-auto 2xl:w-4/5 xl:w-4/5 lg:w-3/4 md:max-lg:w-5/6'>
      <section className='  m-9 flex flex-col gap-3  justify-center text-center'> 
          <h1 className='text-[#00ffd4] 2xl:text-7xl xl:text-[7xl]  2xl:font-bold xl:font-semibold mb-10 '>Glimpses</h1>

         
          <Swiper
      direction="horizontal"
      slidesPerView={3}
      spaceBetween={50}
      mousewheel={true}
      pagination={{ clickable: true }}
      className="mySwiper"
      >
      <SwiperSlide><img src="./assets/5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./assets/5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./assets/5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./assets/5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./assets/5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./assets/5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./assets/5.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="./assets/5.jpg" alt="" /></SwiperSlide>

  
       


      
    </Swiper>
    
    


        </section>

    </GlimpsesContainer>
  )
}


const GlimpsesContainer= styled.div`
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 5rem;
  background: #fff;
  color: #000000;
  margin: 10px;
  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.swiper-wrapper{
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  text-align: center;
  
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


`
export default Glimpses
