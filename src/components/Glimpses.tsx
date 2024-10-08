
import styled from 'styled-components'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';



const Glimpses = () => {
  return (
    <GlimpsesContainer className=' w-full md:w-[80%] lg:w-2/4'>
      <section className='  md:m-9 flex flex-col gap-3  justify-center text-center items-center'> 
          
         
         
<Swiper
modules={[EffectCoverflow, Pagination, Autoplay]}
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  spaceBetween={20}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  
  autoplay={{
    delay: 2000,
    disableOnInteraction: false
}}
  loop={true}

  className="mySwiper"
>
  <SwiperSlide>
    <img src="./assets/10.webp" alt='photo' />
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/11.webp"alt='photo' />
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/12.webp" alt='photo'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/13.webp" alt='photo'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/14.webp" alt='photo'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/15.webp" alt='photo'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/16.webp" alt='photo'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/17.webp"alt='photo' />
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/18.webp" alt='photo'/>
  </SwiperSlide>
  <SwiperSlide>
    <img src="./assets/19.webp"alt='photo' />
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
  width: 300px;
  height: 300px;
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
