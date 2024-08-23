import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Community = () => {
  return (
   <CommunityContainer  className='relative z-30 md:w-[90%] m-auto top-[48rem] '>
<div className='  flex flex-col   justify-center text-center'>
          <div className="glitch-wrapper mb-[20px]">
	<div className="glitch " data-glitch="Our Community Partner">Our Community Partner</div>
</div>
<div className='flex  flex-col lg:flex-row justify-center text-center items-center md:w-[75%] md:mt-6 w-full m-auto'>
            
<div className='container1 md:w-[100%] m-auto'>
 
 <div className="sponsor1 w-full rounded-full">
 <img src="./assets/dev.png" alt="" />
 </div>
 <div className="sponsor1 w-full rounded-full">
 <img src="./assets/poly.png" alt="" />
 </div>
 <div className="sponsor1 w-full rounded-full">
 <img src="./assets/eth.png" alt="" />
 </div>
 <div className="sponsor1 w-full rounded-full">
 <img src="./assets/logoss.jpg" alt="" />
 </div>
 
 <div className="sponsor1 w-full rounded-full">
 <img src="./assets/Azdev Black_Blue logo.png" alt="" />
 </div>
 <div className="sponsor1 w-full rounded-full">
 <img src="./assets/Azdev white logo.png" alt="" />
 </div>
 <div className="sponsor1 w-full rounded-full">
 <img src="./assets/Reskilll_black logo.png" alt="" />
 </div>
 <div className="sponsor1 w-full rounded-full">
 <img src="./assets/Reskilll_white logo.png" alt="" />
 </div>
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
