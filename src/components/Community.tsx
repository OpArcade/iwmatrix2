import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Community = () => {
  return (
   <CommunityContainer  className='relative z-30 md:w-[90%] m-auto top-[48rem] '>
<div className='  flex flex-col   justify-center text-center'>
          <div className="glitch-wrapper mb-[20px]">
	<div className="glitch max-sm:text-[1.5rem]" data-glitch="Our Community Partner">Our Community Partner</div>
</div>
<div className='flex  flex-col lg:flex-row justify-center text-center items-center md:w-[75%] md:mt-6 w-full m-auto'>

         <div className='flex justify-center'>
          <img src="./assets/Tech Holics.png" alt="" className='max-sm:w-[80%]' />
          </div>   
           </div>


    </div>
    <div className='   flex flex-col   justify-center text-center'>
          <div className="glitch-wrapper mb-[20px]">
	<div className="glitch max-sm:text-[1.5rem]" data-glitch="Our Hackathon Partner">Our Hackathon  Partner</div>
</div>
<div className=''>
  <p className='text-[1em] max-sm:w-[85%] md:w-[70%] mx-auto text-center md:text-[1.6em] text-white'>
  Devfolio is the most popular hackathon platform known for its seamless user experience. Our collaboration with Devfolio brought over 900+ registrations, surpassing expectations. The platform made sign-ups easy and attracted diverse talent to MATRIX 2.0. Devfolio also provided swags. Their support enhanced engagement with the tech community.
  </p>
</div>
<div className='flex  flex-col lg:flex-row justify-center text-center items-center md:w-[75%] md:mt-6 w-full m-auto'>

         <div className='flex justify-center'>
          <img src="./assets/dev.png" alt="" className='max-sm:w-[80%] md:w-[50%]' />
          </div>   
           </div>


    </div>
   </CommunityContainer>
  )
}


const CommunityContainer = styled.div`

.container1{
  max-width:100%;
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(170px , 1fr));
  gap:5rem;
}


.sponsor1{
  margin: 10px;
    padding: 10px;
    /* background-color: white; */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sponsor1 img {
    max-width: 250px;
    border-radius: 50%;
    height: auto;
}

@media (max-width:650px){
  .sponsor1 img {
    max-width: 180px;
    border-radius: 50%;
    height: auto;
}
.container1{
  max-width:100%;
  display:grid;
  grid-template-columns:repeat(auto-fill, minmax(170px , 1fr));
  gap:1.5rem;
}
}


`
export default Community
