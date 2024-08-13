
import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/firebase';
import { useStateContext } from '../globalcontext/ContextProvider';


const Eventshome = () => {

  const { setOpenMenu ,currentUser, openMenu}= useStateContext();
  const [paymentdetails , setPaymentdetails] = useState<any>({});

  const getPaymentdetails=()=>{
    if (currentUser?.uid){
      const dbref = ref(db,`payments/${currentUser.uid}`)
    
    onValue(dbref,(snapshot)=>{
      if(snapshot?.exists()){
        let info = snapshot?.val();
        setPaymentdetails(info)
      }
    })
  }}

  useEffect(()=>{
    getPaymentdetails()
  },[])


  return (
    <EventshomeContainer className='relative top-[36rem] w-full z-30'> 

<section className='  m-9 flex flex-col gap-3  justify-center text-center'> 
          
          <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="Events">Events</div>
</div>

       <Swiper
  slidesPerView={5}
  spaceBetween={50}
  loop={true} // Add this prop to enable loop mode
  // pagination={{
  //   clickable: true,
  // }}
  modules={[ Pagination, Autoplay]}
  className="mySwiper"
  autoplay={{
    delay: 2000, // delay between slides in ms
    disableOnInteraction: false, // autoplay will not be disabled after user interaction
  }}
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

{/* Hachathon */}
  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/hacakthom.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">Hachathon</h5>

<p className="mb-3 font-normal text-white dark:text-white">Hackathon is a 24-hour coding marathon where teams brainstorm, design, and develop ..........</p>
{ paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now
    </a>
}

</div>
</div>
  </SwiperSlide>

  {/* Live Project */}
  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/LIVE PROJECT.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">Live Project</h5>
   
<p className="mb-3 font-normal text-white dark:text-white">The Live Project challenge invites you to create a tangible IoT-based solution for a real-world problem.......</p>
{ paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now
   
</a>}
</div>
</div>
  </SwiperSlide>

{/* Gaming Parlour */}
<SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/GAME PAR.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">Gaming Parlour</h5>
   
<p className="mb-3 font-normal text-white dark:text-white">Maintain originality and integrity. Understand software/hardware, its algorithms, and design.Complete......</p>
{ paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now
   
</a>}
</div>
</div>
  </SwiperSlide>



{/* Gaming tournament */}
<SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/GAME TOUR.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">Gaming tournament</h5>
 
<p className="mb-3 font-normal text-white dark:text-white">Team up with friends and dive into thrilling gaming challenges! Level up your experience, make......</p>

 { paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now </a>
 }

</div>
</div>
  </SwiperSlide>

{/* Inside Edge */}
  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/INSIDE EDGE.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">Inside Edge</h5>

<p className="mb-3 font-normal text-white dark:text-white">Become the team manager of your cricket franchise and bid for top players to create your dream team.......</p>
{ paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now
   
</a>}
</div>
</div>
  </SwiperSlide>

{/* UI/UX Design */}
  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/UI-UX DESIGN.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">UI/UX Design</h5>

<p className="mb-3 font-normal text-white dark:text-white">This UI/UX design competition is your chance to turn creative ideas into visually appealing, user-centric designs.....</p>

{ paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now
   
</a>}
</div>
</div>
  </SwiperSlide>


{/* News Surge */}
  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/NEWS SURGE.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">News Surge</h5>

<p className="mb-3 font-normal text-white dark:text-white">Join News Flash and dive into the world of journalism and media at MATRIX 2.0! Teams will record and document......</p>

{ paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now
   
</a>}
</div>
</div>
  </SwiperSlide>

{/* Data Science */}
<SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/Data analytics1.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">Data Science</h5>

<p className="mb-3 font-normal text-white dark:text-white">Dive into data with tasks across three dynamic rounds, testing your skills in sorting, cleaning, and visualization.......</p>

{ paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now
   
</a>}
</div>
</div>
  </SwiperSlide>

{/* Pitchers */}
  <SwiperSlide>
     <div className=" bg-gray-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg object-cover" src="./assets/PITCHERS.png" alt=""/>
<div className="p-5 bg-black">

    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#00ffd4] dark:text-[#00ffd4]">Pitchers</h5>

<p className="mb-3 font-normal text-white dark:text-white">Unleash your entrepreneurial spirit to solve real-world issues with innovative tech-driven business models.......</p>

{ paymentdetails?.payment_status !== 'success' && 
<a href="/Events" className="inline-flex items-center px-3 py-2 text-sm  text-center text-black font-bold bg-[#00ffd4] rounded-lg hover:bg-[00ffd4] focus:ring-4 focus:outline-none  dark:bg-[#00ffd4] dark:hover:bg-[#00ffd4] ">
    Register Now
   
</a>}
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
