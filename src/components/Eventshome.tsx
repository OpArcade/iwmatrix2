
import styled from 'styled-components'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Eventshome = () => {
  return (
    <EventshomeContainer className='relative top-[40rem] w-full z-30'> 

<section className='  m-9 flex flex-col gap-3  justify-center text-center'> 
          
          <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="Events">Events</div>
</div>

       <Swiper
  slidesPerView={5}
  spaceBetween={50}
  loop={true} // Add this prop to enable loop mode
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper"
  
  breakpoints={{
    320: { // phone view
      slidesPerView: 1,
    },
    768: { // tab view
      slidesPerView: 3,
    },
    1024: { // laptop view
      slidesPerView: 5,
    },
  }}
>
  <SwiperSlide>
    <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
</SwiperSlide>

  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
  </SwiperSlide>

  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
  </SwiperSlide>

  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
  </SwiperSlide>

  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
  </SwiperSlide>

  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
  </SwiperSlide>

  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
  </SwiperSlide>

  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
  </SwiperSlide>

  <SwiperSlide>
     <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/5.jpg" alt=""/>
<div className="p-5">
<a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hachathon</h5>
</a>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt sit accusamus quia ut aut perspiciatis</p>
<a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Register Now
     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
</a>
</div>
</div>
  </SwiperSlide>
  
</Swiper>  

    
    


        </section>

    </EventshomeContainer>
  )
}

const EventshomeContainer = styled.div`

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #000000;
/* width: 30px; */
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


/* .swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
} */

/* .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 200px;
  height: 100%;
} */

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
} */



/* @media (max-width:450px){
  .swiper-slide{
    width: 300px !important;
  height: 300px;
  }
} */

`
export default Eventshome
