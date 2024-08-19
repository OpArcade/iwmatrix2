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
            
            <div className='p-2 flex justify-center text-center items-center gap-5'>
            <img src="./assets/eth.png" alt=""  className='max-w-[200px] rounded-[50%]'/>
             <p className='text-white text-[10px]  text-base md:text-2xl'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus nulla dignissimos quos qui labore, unde reprehenderit, quibusdam aperiam voluptates vel est debitis voluptatem saepe, sapiente iusto. Quod reprehenderit iure dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi dolores eos similique autem voluptatum doloribus corporis tempore deserunt! Iure facere voluptates quibusdam voluptatem possimus? </p>
            </div>
           </div>
    </div>
   </CommunityContainer>
  )
}


const CommunityContainer = styled.div`

`
export default Community
